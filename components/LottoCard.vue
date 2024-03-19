<script setup lang="ts">
import { ref, watch, computed } from "vue";

type LottoCardProps = {
  fieldId: number;
  fieldCount: number;
  tipsPerField: { base: number; extra: number };
  numbersPerField: { base: number; extra: number };
};

const props = defineProps<LottoCardProps>();
const tipsPerField = ref(props.tipsPerField);
const numbersPerField = ref(props.numbersPerField);

type SelectedNumbers = {
  base: number[];
  extra: number[];
};

const selectedNumbers = ref<SelectedNumbers>({
  base: [],
  extra: [],
});

const resetHandler = () => {
  selectedNumbers.value.base = [];
  selectedNumbers.value.extra = [];
};

const randomHandler = () => {
  selectedNumbers.value.base = random(
    numbersPerField.value.base,
    tipsPerField.value.base,
  );
  selectedNumbers.value.extra = random(
    numbersPerField.value.extra,
    tipsPerField.value.extra,
  );
};

const random = (max: number, count: number) => {
  const numbers = [];
  while (numbers.length < count) {
    const number = Math.floor(Math.random() * max) + 1;
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
};

const fieldStatus = computed(() => {
  const base = tipsPerField.value.base - selectedNumbers.value.base.length;
  const extra = tipsPerField.value.extra - selectedNumbers.value.extra.length;

  if (base && extra) {
    return `Noch ${base} + ${extra} Zahlen`;
  } else if (base) {
    return `Noch ${base} Zahlen`;
  } else if (extra) {
    return `Noch ${extra} Eurozahlen`;
  } else {
    return "Feld vollständig";
  }
});
</script>

<template>
  <section class="card">
    <div class="title">Feld {{ props.fieldId }} von {{ props.fieldCount }}</div>
    <LottoCardField
      :numbersPerField="numbersPerField.base"
      :tipsPerField="tipsPerField.base"
      :selectedNumbers="selectedNumbers.base"
    />
    <div class="extra-headline">Eurozahlen</div>
    <LottoCardField
      :numbersPerField="numbersPerField.extra"
      :tipsPerField="tipsPerField.extra"
      :selectedNumbers="selectedNumbers.extra"
    />

    <footer class="footer">
      <Button size="s" @click="randomHandler">R</Button>
      <Button size="s">{{ fieldStatus }}</Button>
      <Button size="s" @click="resetHandler">C</Button>
    </footer>
  </section>
</template>

<style scoped>
:root {
  counter-reset: lotto-card;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: var(--size-200);
  padding: var(--size-200) var(--size-200);
  border: var(--size-1) solid rgb(229, 231, 235);
  border-radius: var(--size-4);
}

.extra-headline {
  font: var(--font-m);
  font-weight: 500;
}

.footer {
  /* background: tomato; */
  display: flex;
  flex-direction: row;
  gap: var(--size-100);
}
</style>
