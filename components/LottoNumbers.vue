<script setup lang="ts">
type LottoNumbersProps = {
  numbers: number[];
  additionalNumbers: number[];
};

const props = defineProps<LottoNumbersProps>();
</script>

<template>
  <div class="container">
    <ul class="list">
      <li class="number" v-for="number in props.numbers" :key="number">
        {{ number }}
      </li>
    </ul>
    <Icon name="plus" size="s" />
    <ul class="list">
      <li
        class="number additional"
        v-for="number in props.additionalNumbers"
        :key="number"
      >
        {{ number }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: var(--size-100);
  align-items: center;
}

.list {
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: var(--size-3);
}

.number {
  font: var(--font-100);
  color: var(--color-accent);
  padding: var(--size-50);
  min-width: var(--size-200);
  font-weight: 500;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-secondary);
  border: var(--size-2) solid transparent;
}

@media (min-width: 768px) {
  min-width: var(--size-250);
}

.number:first-child {
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
}

.number:last-child {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}

.additional {
  background-color: rgb(199, 210, 254);
}
</style>
