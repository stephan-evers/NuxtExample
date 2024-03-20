<script setup lang="ts">
type JackPotProps = {
  jackpot: string;
};

const props = defineProps<JackPotProps>();

const jackpotText = computed(() => {
  const mio = Math.floor((parseInt(props.jackpot, 10) || 0) / 1000000);
  return `${mio} Mio € Jackpot`;
});
</script>

<template>
  <div class="jackpot">{{ jackpotText }}</div>
</template>

<style scoped>
.jackpot {
  font: var(--font-400);
  font-weight: 500;
  background: #eac837;
  color: #2d0000;
  border-radius: var(--size-4);
  display: inline-flex;
  padding: var(--size-100) var(--size-200);
}
</style>
