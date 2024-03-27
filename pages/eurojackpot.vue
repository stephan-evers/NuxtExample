<script setup lang="ts">
import { watch } from "vue";
import query from "@/graphql/queryTicketDefinition.gql";
import type { TicketDefinitionResponse } from "@/types";

const { data } = await useAsyncQuery<TicketDefinitionResponse>(query, {
  type: "eurojackpot",
});

type Field = {
  base: number[];
  extra: number[];
};

type TicketState = {
  selectedNumbers: Field[];
  validFields: Field[];
};

const ticket = useState<TicketState>("ticket", () => {
  return {
    selectedNumbers: Array.from(
      { length: data.value?.ticketDefinition.fields || 0 },
      () => ({ base: [], extra: [] }),
    ),
    validFields: [],
  };
});

watch(ticket.value.selectedNumbers, () => {
  if (!data.value?.ticketDefinition) return;
  const { base, extra } = data.value.ticketDefinition.tipsPerField;
  ticket.value.validFields = ticket.value.selectedNumbers.filter((field) => {
    return base === field.base.length && extra === field.extra.length;
  });
});

const submitHandler = async () => {
  await navigateTo({ path: "/checkout" });
};
</script>

<template>
  <Layout>
    <template #header>
      <template v-if="data">
        <JackpotText :jackpot="data.ticketDefinition.jackpot" />
      </template>
    </template>
    <template #default>
      <Slider>
        <Item v-if="data" v-for="n in data.ticketDefinition.fields" :key="n">
          <LottoCard
            :fieldId="n"
            :fieldCount="data.ticketDefinition.fields"
            :tipsPerField="data.ticketDefinition.tipsPerField"
            :numbersPerField="data.ticketDefinition.numbersPerField"
            :selectedNumbers="ticket.selectedNumbers[n - 1]"
          />
        </Item>
      </Slider>
      <div class="submit">
        <Button
          size="m"
          @click="submitHandler"
          :disabled="!ticket.validFields.length"
          dataTestId="submit-button"
        >
          Spielschein abschicken
        </Button>
        <pre
          data-testid="ticket-state"
          :data-ticket-state="JSON.stringify(ticket)"
          hidden
        ></pre>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.submit {
  position: fixed;
  bottom: 0;
  left: 0;
  background: var(--color-white);
  box-shadow: 0 8px 30px rgb(0, 0, 0, 0.12);

  width: 100%;
  padding: var(--size-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .submit {
    position: initial;
    box-shadow: none;
  }
}
</style>
