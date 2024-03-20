<script setup lang="ts">
type Field = {
  base: number[];
  extra: number[];
};

type TicketState = {
  selectedNumbers: Field[];
  validFields: Field[];
};

const ticket = useState<TicketState>("ticket");
if (!ticket.value?.validFields.length) navigateTo("/");
</script>

<template>
  <section class="layout">
    <h1 class="heading">Vielen Dank fürs Mitspielen!</h1>
    <p class="text">Hier sind deine Tippscheine:</p>
    <ul class="list column">
      <li
        class="row"
        v-for="(field, index) in ticket.validFields"
        :key="index"
        :data-testid="'checkout-field-' + index"
      >
        <span class="heading-row">Feld {{ index + 1 }}:</span>
        <ul class="list row">
          <li class="item" v-for="n in field.base" :key="n">
            {{ n }}
          </li>
        </ul>
        <span class="heading-euronumbers">Eurozahlen:</span>
        <ul class="list row">
          <li class="item extra" v-for="n in field.extra" :key="n">
            {{ n }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.heading {
  font: var(--font-800);
  font-weight: 500;
}

.heading-row {
  font: var(--font-200);
  font-weight: 500;
}

.heading-euronumbers {
  font: var(--font-200);
  font-weight: 500;
}

.text {
  font: var(--font-400);
  font-weight: 500;
  margin: var(--size-400) 0;
}

.list {
  list-style: none;
  padding: 0;
}

.column {
  display: flex;
  flex-direction: column;
  gap: var(--size-200);
  align-items: flex-start;
}

.row {
  display: flex;
  flex-direction: row;
  gap: var(--size-200);
  align-items: center;
}

.field {
  display: flex;
  flex-direction: row;
  gap: var(--size-100);
}

.item {
  font: var(--font-200);
  color: var(--color-accent);
  padding: var(--size-100) var(--size-150);
  min-width: var(--size-450);
  border-radius: 9999px;
  font-weight: 500;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-secondary);
  border: var(--size-2) solid var(--color-secondary);
}

.extra {
  border: var(--size-2) solid var(--color-accent);
}
</style>
