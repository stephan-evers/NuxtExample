<script setup lang="ts">
type DrawingResult = {
  date: string;
  numbers: number[];
  additionalNumbers: number[];
};

type DrawingsProps = {
  draws: DrawingResult[];
};

const props = defineProps<DrawingsProps>();
</script>

<template>
  <section :class="$style.container">
    <h1 :class="$style.heading">Aktuelle Gewinnzahlen</h1>
    <ul :class="$style.list">
      <li v-for="(draw, index) in props.draws" :key="index">
        <h2 :class="$style.subHeading">
          EuroJackpot Zahlen
          {{ $d(new Date(draw.date), "short")?.replace(".", "") }}
        </h2>
        <LottoNumbers
          :numbers="draw.numbers"
          :additionalNumbers="draw.additionalNumbers"
        />
      </li>
    </ul>
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

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.heading {
  font: var(--font-400);
  font-weight: 500;
  margin: 0;
}

.subHeading {
  font: var(--font-100);
  font-weight: 700;
  margin: 0;
  margin-bottom: var(--size-100);
}
</style>
