import { readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build, type Plugin } from 'vite'

/**
 * Pre-render: al terminar el build del cliente, renderiza <App /> a HTML con
 * react-dom/server y lo inyecta en dist/index.html dentro de #root. El cliente
 * hidrata sobre ese HTML (ver main.tsx). Así el contenido existe en el HTML crudo
 * para Google, Meta y los rastreadores de IA, que no ejecutan JavaScript.
 */
export function prerender(): Plugin {
  return {
    name: 'black-prerender',
    apply: 'build',
    async closeBundle() {
      if (process.env.BLACK_SSR) return
      process.env.BLACK_SSR = '1'
      const outDir = resolve('dist/.ssr')
      await build({
        configFile: 'vite.config.ts',
        logLevel: 'warn',
        build: {
          ssr: 'src/entry-server.tsx',
          outDir,
          emptyOutDir: true,
          rollupOptions: { output: { entryFileNames: 'entry-server.js' } },
        },
      })
      const mod = (await import(pathToFileURL(resolve(outDir, 'entry-server.js')).href)) as { render: () => string }
      const html = await readFile(resolve('dist/index.html'), 'utf8')
      const marker = '<div id="root"></div>'
      if (!html.includes(marker)) throw new Error('prerender: no se encontró <div id="root"></div> en dist/index.html')
      await writeFile(resolve('dist/index.html'), html.replace(marker, `<div id="root">${mod.render()}</div>`))
      await rm(outDir, { recursive: true, force: true })
      // eslint-disable-next-line no-console
      console.log('  ✓ prerender: HTML estático inyectado en dist/index.html')
    },
  }
}
