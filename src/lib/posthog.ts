import type { PostHog } from 'posthog-js';

export function setupPostHog(key: string, hosts: string[], consent: () => boolean) {
  let client: PostHog | undefined;
  let loading = false;
  const permitted = () => hosts.includes(location.hostname) && consent();
  async function sync() {
    if (!permitted()) {
      client?.stopSessionRecording();
      client?.opt_out_capturing();
      return;
    }
    if (client) {
      if (client.has_opted_out_capturing()) {
        client.opt_in_capturing({ captureEventName: false });
        client.startSessionRecording();
      }
      return;
    }
    if (loading) return;
    loading = true;
    try {
      const { default: posthog } = await import('posthog-js');
      if (!permitted()) return;
      client = posthog.init(key, {
        api_host: 'https://eu.i.posthog.com',
        ui_host: 'https://eu.posthog.com',
        defaults: '2026-01-30',
        person_profiles: 'identified_only',
        autocapture: { dom_event_allowlist: ['click'], element_allowlist: ['a', 'button'], element_attribute_ignorelist: ['value'] },
        capture_pageview: true,
        capture_pageleave: true,
        capture_dead_clicks: false,
        enable_recording_console_log: false,
        session_recording: { maskAllInputs: true, maskTextSelector: 'form', blockSelector: 'input[type="hidden"], input[type="file"]', recordCrossOriginIframes: false },
        before_send: event => permitted() ? event : null,
      });
      // A previous visit may have persisted an opt-out before consent was granted again.
      if (client?.has_opted_out_capturing() && permitted()) {
        client.opt_in_capturing({ captureEventName: false });
        client.startSessionRecording();
      }
    } catch (error) {
      console.warn('PostHog could not load', error);
    } finally {
      loading = false;
    }
  }
  function capture(method: string) {
    if (permitted()) client?.capture('generate_lead', { method }, { transport: 'sendBeacon' });
  }
  document.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest('a[href]') as HTMLAnchorElement | null : null;
    if (!link) return;
    if (link.protocol === 'tel:') capture('phone');
    if (link.protocol === 'https:' && ['wa.me', 'api.whatsapp.com', 'web.whatsapp.com', 'www.whatsapp.com'].includes(link.hostname)) capture('whatsapp');
  }, true);
  window.addEventListener('ar:lead-submitted', () => capture('form'));
  window.addEventListener('analytics:consent-changed', sync);
  window.addEventListener('storage', sync);
  void sync();
}
