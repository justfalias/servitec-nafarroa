import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { build } from 'esbuild';

const result = await build({entryPoints:[new URL('../src/lib/posthog.ts',import.meta.url).pathname],bundle:true,format:'iife',globalName:'analytics',write:false,plugins:[{name:'sdk',setup(b){b.onResolve({filter:/^posthog-js$/},()=>({path:'sdk',namespace:'mock'}));b.onLoad({filter:/.*/,namespace:'mock'},()=>({contents:'export default { init: (...args) => globalThis.init(...args) };',loader:'js'}));}}]});
function fixture(hostname='example.com') {
  const events=[]; const listeners={}; const state={allowed:false,init:[],out:false,stopped:false};
  class Element { closest(){return this.link;} }
  const client={capture:(...args)=>events.push(args),stopSessionRecording:()=>{state.stopped=true;},opt_out_capturing:()=>{state.out=true;},has_opted_out_capturing:()=>state.out,opt_in_capturing:()=>{state.out=false;},startSessionRecording:()=>{state.stopped=false;}};
  const context={Element,location:{hostname},console,init:(key,config)=>{state.init.push({key,config});return client;},document:{addEventListener:(type,fn)=>{listeners['doc:'+type]=fn;}},window:{addEventListener:(type,fn)=>{listeners[type]=fn;}}};
  vm.runInNewContext(result.outputFiles[0].text,context);
  context.analytics.setupPostHog('project-key',['example.com'],()=>state.allowed);
  return {state,events,listeners,Element};
}
const settle=()=>new Promise(resolve=>setImmediate(resolve));
test('no carga SDK sin consentimiento o en un dominio de pruebas',async()=>{
  const f=fixture(); await settle(); assert.equal(f.state.init.length,0);
  const preview=fixture('preview.vercel.app');preview.state.allowed=true;preview.listeners['analytics:consent-changed']();await settle();assert.equal(preview.state.init.length,0);
});
test('aceptar inicia una vez, enmascara formularios y retirar bloquea futuros eventos',async()=>{
  const f=fixture();f.state.allowed=true;f.listeners['analytics:consent-changed']();await settle();
  assert.equal(f.state.init.length,1);const config=f.state.init[0].config;
  assert.equal(config.api_host,'https://eu.i.posthog.com');assert.equal(config.session_recording.maskAllInputs,true);assert.equal(config.session_recording.maskTextSelector,'form');
  await f.listeners['analytics:consent-changed']();assert.equal(f.state.init.length,1);
  f.listeners['ar:lead-submitted']();assert.equal(f.events[0][1].method,'form');
  f.state.allowed=false;await f.listeners['analytics:consent-changed']();assert.equal(f.state.stopped,true);assert.equal(f.state.out,true);assert.equal(config.before_send({event:'x'}),null);
  f.listeners['ar:lead-submitted']();assert.equal(f.events.length,1);
  f.state.allowed=true;await f.listeners['analytics:consent-changed']();assert.equal(f.state.out,false);assert.equal(f.state.stopped,false);assert.equal(f.events[1][0],'$pageview');
});
test('retirar permiso mientras carga el SDK impide inicializarlo',async()=>{
  const f=fixture();f.state.allowed=true;f.listeners['analytics:consent-changed']();f.state.allowed=false;f.listeners['analytics:consent-changed']();await settle();assert.equal(f.state.init.length,0);
});
test('diferencia teléfono y WhatsApp sin incluir datos de contacto',async()=>{
  const f=fixture();f.state.allowed=true;f.listeners['analytics:consent-changed']();await settle();
  for(const href of ['tel:+34999999999','https://wa.me/34999999999?text=privado','https://wa.me.evil.test']){const target=new f.Element();target.link=new URL(href);f.listeners['doc:click']({target});}
  assert.equal(f.events.length,2);assert.deepEqual(f.events.map(e=>e[1].method),['phone','whatsapp']);assert.ok(!JSON.stringify(f.events).includes('999999999'));
});
