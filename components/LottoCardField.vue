//~/components/LottoCardField.vue

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  className: String,
  numbersPerField: Number,
  tipsPerField: Number,
  selectedNumbers: { type: Array, default: [] },
});

const tips = ref(props.selectedNumbers);

watch(
  () => props.selectedNumbers,
  (newVal) => (tips.value = newVal),
);

function toggleNumber(number) {
  if (tips.value.includes(number)) {
    tips.value = tips.value.filter((n) => n !== number);
  } else {
    if (tips.value.length >= props.tipsPerField) return;
    tips.value.push(number);
  }
}
</script>

<template>
  <div class="grid">
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
  width: 100%;
}

.number {
  padding: var(--size-50) var(--size-100);
  text-align: center;
  cursor: pointer;
  color: var(--color-accent);
  font: var(--font-s);
  font-weight: 500;
  border-radius: 9999px;
  background-color: var(--color-secondary);
  user-select: none;
}

.selected {
  background-color: rgb(199 210 254);
}
</style>
