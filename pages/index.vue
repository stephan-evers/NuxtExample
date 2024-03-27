<script setup lang="ts">
import query from "@/graphql/queryDraws.gql";
import { computed } from "vue";

const { data } = await useAsyncQuery(query, {
  type: "eurojackpot",
});
</script>

<template>
  <Layout>
    <template v-if="data" #default>
      <div :class="$style.grid">
        <Hero :class="$style.hero" />
        <Drawings :class="$style.drawings" :draws="data.draw.draws" />
        <Odds :class="$style.odds" :odds="data.draw.draws[0].odds" />
      </div>
    </template>
  </Layout>
</template>

<style module>
.grid {
  display: grid;
  gap: var(--size-100);
  grid-template-areas: "hero hero hero" "drawings drawings drawings" "odds odds odds";
  grid-template-columns: 1fr 1fr 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-areas: "hero hero drawings" "odds odds odds";
  }
}

.hero {
  grid-area: hero;
}

.drawings {
  grid-area: drawings;
}

.odds {
  grid-area: odds;
}
</style>
