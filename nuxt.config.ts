// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    tailwindcss:{
        cssPath: '~/assets/css/tailwind.css',
        configPath:'tailwind.config',
        exposeConfig:false,
        injectPosition:0,


    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css: [
        "~/assets/css/tailwind.css"
    ],

});
