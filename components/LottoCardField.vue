//~/components/LottoCardField.vue

<script setup lang="ts">
import { ref, watch } from "vue";

type LottoCardFieldProps = {
  dataTestId?: string;
  numbersPerField: number;
  tipsPerField: number;
  selectedNumbers: number[];
};

const props = defineProps<LottoCardFieldProps>();
const tips = ref(props.selectedNumbers);

watch(
  () => props.selectedNumbers,
  (newVal) => (tips.value = newVal),
);

function toggleNumber(n: number) {
  if (tips.value.includes(n)) {
    tips.value = tips.value.filter((v) => v !== n);
  } else {
    if (tips.value.length >= props.tipsPerField) return;
    tips.value.push(n);
  }
}
</script>

<template>
  <div class="grid" :data-testid="props?.dataTestId">
    <div
      v-for="number in props.numbersPerField"
      :key="number"
      class="number"
      :class="{ selected: tips.includes(number) }"
      @click="toggleNumber(number)"
    >
      {{ number }}
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--size-100);
}

.number {
  padding: var(--size-100) var(--size-150);
  text-align: center;
  cursor: pointer;
  color: var(--color-accent);
  font: var(--font-100);
  font-weight: 500;
  border-radius: 9999px;
  background-color: var(--color-secondary);
  user-select: none;
}

.selected {
  background-color: rgb(199 210 254);
}
</style>
