// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo"],
  apollo: {
    includeNodeModules: true,
    fetchOptions: {
      mode: "no-cors", // no-cors, *cors, same-origin
    },
    clients: {
      default: { httpEndpoint: "https://www.lottohelden.de/graphql" },
    },
  },
});
