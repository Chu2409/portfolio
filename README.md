# Portafolio de Daniel Zhu

Sitio personal en español (`/`) e inglés (`/en/`). Publicado en <https://chuer.netlify.app>.

## Stack

Astro 7, Tailwind CSS 4 y TypeScript. Sin frameworks de cliente: el único JavaScript es el cambio de tema
y el envío del formulario de contacto (Formspree).

## Desarrollo

Requiere Node 22 o superior y pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # verifica tipos y genera dist/
```

## Dónde se edita el contenido

Todo el texto, en ambos idiomas, está en `src/i18n/content.ts`: presentación, casos de trabajo,
experiencia, proyectos y stack. Los datos de contacto y la ruta del CV están en `perfil`, en el mismo
archivo.
