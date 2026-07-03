# Prompt reutilizable: webs locales de conversión en Navarra

Este documento sirve para replicar la base estratégica y técnica de Servitec Nafarroa en nuevos negocios locales de Pamplona/Navarra: webs estáticas rápidas, con SEO local, llamadas y WhatsApp como conversión principal, analítica instalada y estructura preparada para escalar por servicios, marcas, zonas o especialidades.

La idea no es copiar literalmente la web, sino reutilizar el sistema: una página principal muy enfocada a conversión, landings dinámicas para capturar búsquedas locales y una base técnica simple con Astro + Vercel.

---

## 1. Cuándo usar este prompt

Úsalo cuando quieras crear una web propuesta o MVP para un negocio local como:

- Reparaciones, instalaciones o mantenimiento.
- Clínicas, salud, estética o bienestar.
- Reformas, gremios, cerrajería, fontanería, electricidad.
- Limpieza, jardinería, academias, gestorías o servicios profesionales.
- Negocios con intención clara de contacto: llamada, WhatsApp, formulario o reserva.

Funciona especialmente bien si el negocio tiene búsquedas del tipo:

- `servicio + Pamplona`
- `servicio + Navarra`
- `servicio urgente + Pamplona`
- `marca/especialidad + Pamplona`
- `servicio + zona/municipio`

---

## 2. Briefing mínimo rellenable

Copia este bloque y complétalo antes de pedir a Codex que genere la web.

```md
# Briefing web local

## Negocio
- Nombre comercial:
- Sector:
- Ciudad principal:
- Provincia/comunidad:
- Zona de servicio:
- Idioma de la web:

## Conversión
- Teléfono:
- WhatsApp:
- Email:
- CTA principal:
- CTA secundario:
- Horario:
- Urgencias: sí/no

## Oferta
- Servicios principales:
- Servicios secundarios:
- Especialidades:
- Marcas, tratamientos, productos o categorías relevantes:
- Diferenciales reales:
- Garantías o compromisos:
- Precios orientativos, si aplica:

## SEO local
- Keyword principal:
- Keywords secundarias:
- Municipios o barrios objetivo:
- Páginas dinámicas deseadas:
  - Por servicio: sí/no
  - Por marca/categoría/especialidad: sí/no
  - Por zona: sí/no
  - Urgencias: sí/no

## Confianza
- Reseñas reales o simuladas para propuesta:
- Valoración media:
- Número de reseñas:
- Años de experiencia:
- Certificaciones, licencias o seguros:
- Fotos disponibles:
- Logo disponible:

## Analítica
- Vercel Analytics: sí
- Google Tag Manager ID:
- Microsoft Clarity ID:
- Eventos clave:
  - Click teléfono
  - Click WhatsApp
  - Envío formulario
  - Click email

## Estilo
- Colores preferidos:
- Tono visual:
- Competidores o referencias:
- Restricciones:
```

---

## 3. Prompt maestro para Codex

Pega este prompt en un proyecto nuevo de Codex. Sustituye los campos entre corchetes.

```md
Quiero crear una web estática local de alta conversión para [NOMBRE_NEGOCIO], un negocio de [SECTOR] en [CIUDAD], Navarra.

Usa Astro, TypeScript estricto, Tailwind CSS y despliegue en Vercel. La web debe estar en español y debe seguir la lógica estratégica de Servitec Nafarroa: rápida, clara, orientada a llamadas y WhatsApp, con SEO local fuerte y páginas dinámicas para captar búsquedas long-tail.

Objetivo principal:
- Generar contactos por teléfono y WhatsApp.
- Posicionar búsquedas locales en Pamplona/Navarra.
- Permitir replicar landings por servicio, zona y especialidad sin CMS.

Estructura deseada:
1. Homepage con:
   - Hero con propuesta de valor, teléfono y WhatsApp visibles.
   - Servicios principales.
   - Especialidades, marcas, tratamientos o categorías, según el sector.
   - Zonas de servicio en Navarra.
   - Tarifas o proceso de trabajo, si aplica.
   - Reseñas/testimonios.
   - Quiénes somos/confianza.
   - FAQ.
   - Footer con contacto, horario y enlaces internos.

2. Páginas dinámicas:
   - `/[servicio]-pamplona/` o una ruta SEO equivalente.
   - `/[especialidad]-pamplona/` si el sector lo necesita.
   - `/[servicio]-[zona]/` si hay estrategia por municipio.

3. Layout base:
   - Meta title y description por página.
   - Canonical.
   - Open Graph.
   - Twitter Card.
   - JSON-LD LocalBusiness o tipo más específico si encaja.
   - WebSite JSON-LD.
   - FAQPage solo donde corresponda, no duplicado en todas las páginas.
   - Favicons y manifest.
   - Preload de imagen LCP.
   - Vercel Analytics.
   - Google Tag Manager con `is:inline`.
   - Microsoft Clarity con `is:inline`.

4. Datos centralizados:
   - Servicios en `src/data/servicios.ts`.
   - Zonas en `src/data/zonas.ts`.
   - Categorías, marcas o especialidades en `src/data/especialidades.ts`.
   - Reseñas en un array o archivo de datos.
   - No hardcodear contenido repetido en muchos sitios.

5. Diseño:
   - Mantener esencia de web local premium: directo, confiable, rápido y orientado a conversión.
   - No hacer una landing decorativa vacía.
   - Primer pantallazo con negocio, servicio, zona y CTA claros.
   - Adaptar colores al sector, pero mantener contraste WCAG AA.
   - Botones de teléfono y WhatsApp siempre visibles en móvil.
   - Usar imágenes reales o assets creíbles del sector.

6. Conversión:
   - Teléfono clicable con `tel:`.
   - WhatsApp clicable con mensaje precargado.
   - CTA principal repetido en hero, secciones intermedias y footer.
   - FAB móvil de WhatsApp o contacto.
   - Eventos preparados para medir clicks de teléfono y WhatsApp.

7. SEO:
   - Crear arquitectura de enlaces internos desde la home a servicios, zonas y especialidades.
   - Generar sitemap estático.
   - Crear robots.txt.
   - Crear llms.txt con resumen del negocio.
   - Usar schema local adecuado.
   - Cuidar que cada página tenga title, description, H1 y canonical únicos.

8. Performance:
   - Sitio estático.
   - CSS pequeño e inline si tiene sentido.
   - Imágenes optimizadas en WebP/PNG.
   - No añadir dependencias pesadas.
   - Verificar `npm run build`.

Datos del negocio:
[PEGA_AQUI_EL_BRIEFING_COMPLETO]

Antes de editar, revisa la estructura del proyecto. Después implementa la base completa y verifica con `npm run build`.
```

---

## 4. Estructura base recomendada

```txt
src/
  components/
    NavBar.astro
    ContactCta.astro
    Footer.astro
  data/
    negocio.ts
    servicios.ts
    zonas.ts
    especialidades.ts
    reviews.ts
  layouts/
    Layout.astro
  pages/
    index.astro
    [servicio]-pamplona.astro
    [especialidad]-pamplona.astro
    [servicio]-[zona].astro
  styles/
    global.css
public/
  logos/
  images/
  favicon.ico
  favicon.svg
  og-image.png
  robots.txt
  sitemap.xml
  site.webmanifest
  llms.txt
```

Para propuestas rápidas, se puede empezar con menos componentes y más contenido en `index.astro`. Para proyectos que se van a escalar, conviene separar datos y componentes desde el principio.

---

## 5. Patrón de contenido de la homepage

La homepage debe responder muy rápido a estas preguntas:

1. Qué hace el negocio.
2. Dónde lo hace.
3. Por qué confiar.
4. Cómo contactar.
5. Qué servicios concretos cubre.
6. Qué zonas cubre.
7. Qué ocurre después de contactar.

Orden recomendado:

```txt
Hero
Servicios principales
Bloque de confianza / datos rápidos
Especialidades, marcas o categorías
Zonas de servicio
Proceso o tarifas
Reseñas
Quiénes somos
FAQ
Footer
```

El hero debe incluir:

- H1 con servicio + ciudad.
- Subtítulo con beneficio concreto.
- Teléfono.
- WhatsApp.
- Horario o disponibilidad.
- Imagen real o creíble del servicio.

Ejemplo de H1:

```txt
[Servicio principal] en Pamplona y Navarra
```

Ejemplo de subtítulo:

```txt
Atención rápida, presupuesto claro y servicio profesional para [tipo de cliente] en [zona].
```

---

## 6. Adaptación por sector

### Servicios técnicos y reparaciones

Landings útiles:

- Servicio principal.
- Tipo de aparato/equipo.
- Marca.
- Urgencias.
- Zona.

CTA:

- Llamar ahora.
- WhatsApp con foto del problema.

### Salud, estética y bienestar

Landings útiles:

- Tratamiento.
- Problema que resuelve.
- Primera visita.
- Zona.

CTA:

- Reservar cita.
- Escribir por WhatsApp.

Importante:

- Evitar promesas médicas absolutas.
- Usar lenguaje responsable.

### Reformas y gremios

Landings útiles:

- Servicio.
- Urgencia.
- Tipo de inmueble.
- Zona.

CTA:

- Pedir presupuesto.
- Enviar fotos por WhatsApp.

### Servicios profesionales

Landings útiles:

- Servicio.
- Tipo de cliente.
- Problema o trámite.
- Zona.

CTA:

- Solicitar consulta.
- Enviar caso por email/WhatsApp.

---

## 7. Checklist SEO local

- Title único por página, con keyword y ciudad.
- Description única, natural y orientada a contacto.
- H1 único por página.
- Canonical absoluto.
- Enlaces internos entre home, servicios, zonas y especialidades.
- JSON-LD del negocio en el layout.
- FAQPage solo en páginas con FAQ visible.
- Sitemap actualizado.
- Robots.txt correcto.
- Open Graph con imagen local.
- NAP consistente: name, address, phone.
- Teléfono y horario visibles.
- Municipios objetivo enlazados desde la home.
- Contenido específico por landing, evitando páginas casi duplicadas.

---

## 8. Checklist conversión

- CTA de teléfono en primer viewport.
- CTA de WhatsApp en primer viewport.
- Botón fijo en móvil.
- `tel:` correcto.
- Link de WhatsApp con mensaje precargado.
- Horario visible.
- Señales de confianza cerca del CTA.
- Reseñas visibles.
- Precios, proceso o expectativa clara.
- Footer con contacto completo.
- Eventos de analítica para clicks clave.

Mensaje WhatsApp recomendado:

```txt
Hola, quiero información sobre [SERVICIO] en [CIUDAD].
```

URL:

```txt
https://wa.me/[TELEFONO_CON_PREFIJO]?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20[SERVICIO]%20en%20[CIUDAD].
```

---

## 9. Checklist analítica

Instalar:

- Vercel Analytics.
- Google Tag Manager.
- Microsoft Clarity.

Medir:

- Click en teléfono.
- Click en WhatsApp.
- Click en email.
- Envío de formulario, si existe.
- Scroll o interacción con secciones clave, si se quiere afinar.

Notas:

- Si GTM gestiona GA4, no añadir GA4 directo en código.
- En Astro, los scripts de GTM y Clarity deben usar `is:inline`.
- Los IDs de analítica se cambian por proyecto.
- La propiedad de Google/Clarity/Vercel puede estar asociada a `justoberganzo@gmail.com`, pero la web no debe depender de ese email en código.

---

## 10. Checklist técnico Astro/Vercel

- `npm run build` sin errores.
- Node.js >= 22.12.0.
- `astro.config.mjs` con Tailwind.
- `tsconfig.json` en modo estricto.
- `vercel.json` con redirects y headers.
- Favicons completos.
- `public/og-image.png`.
- `public/sitemap.xml`.
- `public/robots.txt`.
- `public/llms.txt`.
- Imágenes optimizadas.
- Sin dependencias innecesarias.

Headers recomendados:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

---

## 11. Instrucción para adaptar diseño sin perder esencia

Mantener:

- Hero claro con CTA inmediato.
- SEO local visible.
- Secciones densas pero legibles.
- Confianza, reseñas y zonas.
- Estática rápida.
- Arquitectura de landings.

Cambiar por sector:

- Paleta de colores.
- Iconografía.
- Imagen hero.
- Orden de secciones si el comprador necesita otra prueba de confianza.
- Tipo de páginas dinámicas.
- Tono del copy.

Evitar:

- Hero genérico tipo startup.
- Demasiada decoración.
- Textos vagos.
- CTA escondidos.
- Páginas dinámicas vacías o demasiado parecidas.
- Analítica duplicada.

---

## 12. Mini-prompt para clonar la estrategia desde Servitec

```md
Analiza este proyecto de Servitec Nafarroa como referencia de estrategia, arquitectura y conversión. Crea una web nueva para [NOMBRE_NEGOCIO] en [SECTOR], manteniendo la esencia:

- Web local estática con Astro.
- SEO local para Pamplona/Navarra.
- Homepage orientada a llamada y WhatsApp.
- Landings dinámicas por servicios, zonas y especialidades.
- Datos centralizados.
- Layout con SEO, schema, analytics, favicons y OG.
- Build limpio y despliegue en Vercel.

No copies literalmente textos, marca, colores ni assets. Reinterpreta el patrón para el nuevo sector usando el briefing adjunto.

Briefing:
[PEGAR_BRIEFING]
```

---

## 13. Posible skill personal para Codex

Si quieres convertir esto en una skill reutilizable, crea una skill llamada `web-local-navarra` con esta descripción:

```md
Use this skill when creating or adapting local business websites for Pamplona/Navarra. The skill builds Astro/Vercel static sites focused on SEO local, phone/WhatsApp conversion, structured data, analytics, fast performance, and scalable dynamic landing pages by service, area, brand, category, or specialty.
```

Instrucciones principales de la skill:

```md
When invoked:
1. Collect or infer the local business briefing.
2. Build or adapt an Astro static site.
3. Centralize business data in TypeScript files.
4. Create a conversion-focused homepage.
5. Add dynamic SEO landing pages where relevant.
6. Configure LocalBusiness/schema metadata, canonical URLs, Open Graph, sitemap, robots.txt, llms.txt, favicons, GTM, Clarity, and Vercel Analytics.
7. Ensure phone and WhatsApp CTAs are prominent, measurable, and mobile-friendly.
8. Run `npm run build` before finishing.
```

Esta skill puede vivir en tu carpeta personal de skills de Codex para invocarla en cualquier proyecto nuevo.

---

## 14. Definition of Done

Una web generada con este sistema está lista como propuesta cuando:

- La home comunica negocio, ciudad, servicio y CTA en el primer pantallazo.
- Hay al menos una estructura escalable de páginas SEO.
- Los datos principales no están duplicados sin control.
- Teléfono y WhatsApp funcionan.
- El SEO técnico básico está completo.
- La analítica está preparada.
- El sitio compila.
- Puede desplegarse en Vercel sin configuración compleja.

