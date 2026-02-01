import { defineConfig } from 'vite'
import { resolve } from 'path' // Importante importar esto

export default defineConfig({
    // Recuerda que aquí va el nombre de tu repo, ej: '/aksel96.github.io/'
    base: '/aksel96.github.io/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'), // Tu portafolio principal
                maria: resolve(__dirname, 'maria/index.html') // La nueva página
            }
        }
    }
})