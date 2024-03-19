<script setup lang="ts">
import query from "~/graphql/queryTicketDefinition.gql";
const { data, error } = await useAsyncQuery(query, { type: "eurojackpot" });

const nextDrawDate = "Dienstag, 19.03.2024";
const cutOffTime = "19:10 Uhr";

console.log({ data });
</script>

<template>
  <section class="layout">
    <header class="header">
      <img class="logo" src="/eurojackpot.svg" width="236" height="100" />
    </header>
    <template v-if="data">
      <JackpotText :jackpot="data.ticketDefinition.jackpot" />

      <Slider>
        <Item v-for="n in data.ticketDefinition.fields" :key="n">
          <LottoCard
            :fieldId="n"
            :fieldCount="data.ticketDefinition.fields"
            :tipsPerField="data.ticketDefinition.tipsPerField"
            :numbersPerField="data.ticketDefinition.numbersPerField"
          />
        </Item>
      </Slider>
    </template>
  </section>
</template>

<style scoped>
.logo {
  max-width: 100%;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
