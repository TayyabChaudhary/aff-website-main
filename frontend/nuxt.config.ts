// https://nuxt.com/docs/api/configuration/nuxt-config
import type { CreateAxiosDefaults } from "axios"
import { resolve } from "path"
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      axios: <CreateAxiosDefaults>{
        baseURL: "http://localhost:9008/"
      }
    }
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  devtools: { enabled: true },

  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', 'nuxt-icon'],

})
