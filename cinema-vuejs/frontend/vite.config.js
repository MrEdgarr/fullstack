import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
// Tailwindcss
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        tailwindcss(),
        Components({
            resolvers: [
                IconsResolver({
                    prefix: 'icon',
                }),
            ],
        }),
        Icons({
            compiler: 'vue3',
            autoInstall: true,
            // Custom scale
            scale: 1.2,
            // Default classes
            defaultClass: 'v-icon',
            defaultStyle: 'display: inline-block; vertical-align: middle;',
 
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('src', import.meta.url)),
        },
        extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    //    server: {
    //         port: 3000,
    //     },
})
