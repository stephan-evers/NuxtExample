// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "@nuxt/test-utils/module", "@nuxtjs/i18n"],
  future: {
    typescriptBundlerResolution: false,
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  apollo: {
    includeNodeModules: true,
    clients: {
      default: { httpEndpoint: "https://www.lottohelden.de/graphql" },
    },
  },
});
