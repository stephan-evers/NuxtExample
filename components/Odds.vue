<script setup lang="ts">
type Odd = {
  __typename: string;
  description: string;
  descriptionShort: string;
  link: string;
  numberOfWinners: string;
  numbers: number[];
  odd: string;
  chance: string;
  winningClass: number;
  withOptions: any[];
};

const props = defineProps<{
  odds: Odds[];
}>();

const { n } = useI18n();

const currency = (value: string) => {
  const numberValue = Number(value) || 0;
  return n(numberValue / 100, "currency");
};
</script>

<template>
  <section :class="$style.container">
    <h1 :class="$style.heading">Gewinnquoten EuroJackpot</h1>
    <table :class="[$style.table, $style.alignLeft]">
      <thead :class="$style.thead">
        <tr>
          <th>Gewinn&ZeroWidthSpace;klasse</th>
          <th>Richtige Zahlen</th>
          <th :class="[$style.alignRight, $style.large]">Gewinner</th>
          <th :class="$style.alignRight">Gewinn&ZeroWidthSpace;summe</th>
        </tr>
      </thead>
      <tbody :class="$style.tbody">
        <tr v-for="(odd, index) in props.odds" :key="index">
          <td>{{ odd.winningClass }}</td>
          <td>
            <span :class="$style.small">{{ odd.descriptionShort }}</span>
            <span :class="$style.large">{{ odd.description }}</span>
          </td>
          <td :class="[$style.large, $style.alignRight]">
            {{ odd.numberOfWinners + "x" }}
          </td>
          <td :class="[$style.small, $style.alignRight]">
            {{ odd.numberOfWinners + "x" }}
            <br />
            {{ currency(odd.odd) }}
          </td>
          <td :class="[$style.large, $style.alignRight]">
            {{ currency(odd.odd) }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  gap: var(--size-200);
  padding: var(--size-200) var(--size-200) var(--size-250);
  border: var(--size-1) solid rgb(229, 231, 235);
  border-radius: var(--size-4);
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding-right: var(--size-100);
}

.table th:last-child,
.table td:last-child {
  padding-right: 0;
}

.heading {
  font: var(--font-400);
  font-weight: 500;
  margin: 0;
}

.thead {
  font: var(--font-100);
  font-weight: 700;
}

.thead th {
  padding-bottom: var(--size-100);
}

.tbody {
  font: var(--font-50);
}

@media (min-width: 768px) {
  .tbody {
    font: var(--font-200);
  }
}

.tbody td {
  border-top: var(--size-1) solid rgb(229, 231, 235);
  padding: var(--size-100) 0;
}

.alignLeft {
  text-align: left;
}

.alignRight {
  text-align: right;
}

.small {
  display: table-cell;
}

.large {
  display: none;
}

@media (min-width: 768px) {
  .small {
    display: none;
  }

  .large {
    display: table-cell;
  }
}
</style>
