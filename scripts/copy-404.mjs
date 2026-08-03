import { copyFileSync } from 'fs'
import { join } from 'path'

// GitHub Pages non supporta il routing lato client: su refresh o link diretto
// a una sotto-pagina risponderebbe con un vero 404. Il workaround standard è
// servire una copia di index.html come 404.html, così React Router (BrowserRouter)
// prende in carico la route non appena il bundle si carica.
const distDir = join(process.cwd(), 'dist')

copyFileSync(join(distDir, 'index.html'), join(distDir, '404.html'))

console.log('404.html creato a partire da index.html per il fallback SPA su GitHub Pages.')
