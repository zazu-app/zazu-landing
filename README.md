# Zazu · Landing (Next.js)

Landing de captación de **Zazu** para España, foco en **escuelas de deportes acuáticos**. Dirección visual **"Sol y sal"** (cálida, humana, costera — no SaaS azul genérico). Construida desde cero con Next.js App Router.

Es la versión de producción de la landing documentada en `../go-to-market/10-landing-page-spec.md`.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** con design tokens en OKLCH (`src/app/globals.css` → `@theme`)
- **next/font** (Bricolage Grotesque display + Hanken Grotesk cuerpo, self-host)
- **next/image** (fotografía optimizada, `remotePatterns` para Unsplash)
- **i18n** es/en con App Router `[lang]` + diccionarios (`src/i18n`), sin librerías externas
- SEO/metadata nativos, `generateStaticParams` → `/es` y `/en` como estáticas (SSG)
- **Analítica:** Vercel Web Analytics (cookieless, siempre) + Google Analytics 4 (con cookies, **solo tras consentimiento**)
- **Consentimiento de cookies** RGPD: banner aceptar/rechazar/configurar (`src/components/cookie-consent.tsx`)

## Analítica y consentimiento

- **Vercel Web Analytics** (`@vercel/analytics`) es cookieless y se activa solo al desplegar en Vercel. No requiere consentimiento.
- **Google Analytics 4** se carga únicamente si (a) `NEXT_PUBLIC_GA_ID` está definido y (b) el usuario acepta la categoría "Análisis" en el banner. Lógica en `src/components/analytics.tsx` + `src/lib/consent.ts`.
- El banner permite aceptar todo, rechazar todo o configurar por categoría (Técnicas / Análisis / Marketing). La preferencia se guarda en `localStorage` y se puede reabrir desde "Configuración de cookies" en el pie.

## SEO

- `src/app/robots.ts` → `robots.txt` · `src/app/sitemap.ts` → `sitemap.xml` (con `hreflang` es/en).
- Metadata enriquecida en `[lang]/layout.tsx`: canonical + `alternates` (es/en/x-default), Open Graph, Twitter Card, keywords, robots.
- **Open Graph dinámico** por idioma en `src/app/[lang]/opengraph-image.tsx` (1200×630).
- **JSON-LD** (Organization + WebSite) en la home.
- Configura `NEXT_PUBLIC_SITE_URL` en producción (afecta a metadata, canonical, sitemap y robots). Ver `.env.example`.

## Contexto de diseño

- `PRODUCT.md` — registro (brand), usuarios, propósito, personalidad, anti-referencias, principios, accesibilidad.
- `DESIGN.md` — sistema visual: paleta OKLCH, tipografía, layout, imágenes, motion, componentes, y los "anti-slop" activos.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000 → redirige a /es o /en según Accept-Language
npm run build      # build de producción (SSG)
npm start          # sirve el build
```

## Estructura

```
src/
  middleware.ts            # detección de idioma y redirección a /es|/en
  i18n/                    # config, loader y diccionarios es.json / en.json
  lib/images.ts            # bases de imágenes (Unsplash verificadas, a sustituir por fotos propias)
  app/
    [lang]/layout.tsx      # <html lang>, fuentes, metadata por idioma
    [lang]/page.tsx        # composición de la landing
    globals.css            # tokens de diseño + estilos base
  components/              # header, hero, problem, value-cycle, features,
                          # disciplines, how-it-works, proof, pricing, faq,
                          # final-cta, footer, reveal, wordmark
```

## Accesibilidad

WCAG 2.1 AA verificado en los pares de color clave (ink/bg 15.3:1, texto secundario/arena 5.6:1, foam/teal 12–16:1, tinta/coral 5.1:1). Foco visible, navegación por teclado, `prefers-reduced-motion`, skip-link, un solo `h1`, landmarks. El contenido es visible por defecto; las animaciones de entrada solo lo realzan (nunca lo ocultan).

## Pendiente antes de publicar

- Sustituir fotos de Unsplash por fotografía propia de la escuela.
- Sustituir testimonios de ejemplo por casos reales.
- Conectar el formulario de demo al CRM/endpoint (ver `src/components/final-cta.tsx`, `TODO`).
- Configurar el número real de WhatsApp (`src/app/[lang]/page.tsx`).
- Añadir eventos de tracking (form_submit, click_cta) — el envío a GA4 debe respetar el consentimiento.
- Definir variables de entorno en producción: `NEXT_PUBLIC_SITE_URL` y `NEXT_PUBLIC_GA_ID` (ver `.env.example`).
- **Legal** (páginas publicadas en `/aviso-legal`, `/privacidad`, `/cookies`): completar los `[MARCADORES]` con los datos reales de la empresa y revisar con asesoría legal. Texto en `src/content/legal.ts` y docs en `legal/`.
- Verificar el dominio en Google Analytics y activar Vercel Web Analytics en el proyecto de Vercel.

_Ya resuelto:_ banner de consentimiento de cookies (RGPD), carga condicional de GA4, SEO (robots, sitemap, OG dinámico, JSON-LD, metadata) y páginas legales.
