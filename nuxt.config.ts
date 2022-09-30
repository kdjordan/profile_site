// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxt/content'],
    css: ['~/assets/css/main.css'],
    build: {
        postcss: {
        postcssOptions: require('./postcss.config.js'),
        },
    }
})
