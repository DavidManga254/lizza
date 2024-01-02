// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "nuxt-vue3-google-signin",
    "@pinia/nuxt",
  ],
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
