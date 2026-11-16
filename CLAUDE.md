# Portafolio de Daniel Zhu

Sitio personal de una sola página, en español (`/`) e inglés (`/en/`). Publicado en
<https://chuer.netlify.app>: Netlify compila y despliega con cada push a `main`.

## Stack y comandos

Astro 7, Tailwind CSS 4 y TypeScript, con pnpm. Sin frameworks de cliente.

```bash
pnpm dev      # http://localhost:4321
pnpm build    # astro check + astro build; debe terminar con 0 errores
```

## Dónde está cada cosa

- `src/i18n/content.ts` — **todo el texto**, en ambos idiomas, y los datos de contacto (`perfil`).
  Cualquier cambio de contenido va aquí y se hace en `es` y en `en` a la vez.
- `src/components/` — una sección por archivo (`Inicio`, `Trabajo`, `Experiencia`, `Proyectos`,
  `Contacto`); `Pagina.astro` las ensambla y `Efectos.astro` tiene las animaciones.
- `src/components/Tec.astro` — etiqueta de tecnología con logo; el mapa nombre → logo está ahí.
- `src/styles/global.css` — colores de los temas claro y oscuro y las clases compartidas
  (`.tarjeta`, `.boton`, `.etiqueta`).
- `src/assets/` — capturas de los proyectos.
- `public/cv-daniel-zhu-{es,en}.pdf` — el CV. **No se edita aquí**: se genera en
  `../multi-repo/cv` con `node generar.mjs --copiar=../../portfolio/public`.
- `public/og-{es,en}.png` — imagen para redes sociales, una por idioma.

## Convenciones

- Código, nombres y comentarios en español.
- Los textos no hablan en primera persona dentro de los casos de trabajo y evitan encasillar el
  perfil en un solo sector: la idea es mostrar versatilidad.
- No se muestran fotos personales.
- El diseño debe funcionar en ambos temas y respetar `prefers-reduced-motion`.
- Antes de dar algo por terminado: `pnpm build` y revisar la página en el navegador.
