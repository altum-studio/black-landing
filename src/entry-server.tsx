import { renderToString } from 'react-dom/server'
import App from './App'

/** Render estático del sitio para el HTML de producción (ver plugins/prerender.ts). */
export function render() {
  return renderToString(<App />)
}
