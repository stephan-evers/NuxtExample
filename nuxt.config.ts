// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "@nuxt/test-utils/module"],
  future: {
    typescriptBundlerResolution: false,
  },
  apollo: {
    includeNodeModules: true,
    fetchOptions: {
      mode: "no-cors",
    },
    clients: {
      default: { httpEndpoint: "https://www.lottohelden.de/graphql" },
    },
  },
});
