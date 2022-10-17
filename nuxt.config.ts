// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxt/content'],
    // buildModules: ['nuxt-gsap-module'],
    css: ['~/assets/css/main.css'],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
        transpile: ['gsap']
    },
    // buildModules: ['nuxt-gsap-module'],
    // gsap: {
    //     /* module options */
    //   },
})
