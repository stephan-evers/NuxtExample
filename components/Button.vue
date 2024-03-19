<script setup lang="ts">
type ButtonVariant = "accent" | "primary" | "secondary";
type ButtonSize = "s" | "m" | "l";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "m",
});

const computedClass = computed(() => {
  return ["button", `variant-${props.variant}`, `size-${props.size}`];
});
</script>

<template>
  <component is="button" :class="computedClass" @click="$emit('click')">
    <slot></slot>
  </component>
</template>

<style scoped>
.button {
  all: unset;
  cursor: pointer;
  user-select: none;
  font-weight: 500 !important;
  border-radius: 9999px;
}

.size-s {
  font: var(--font-s);
  height: var(--size-300);
  /* min-width: var(--size-300); */
  padding: var(--size-100) var(--size-200);
}

.size-m {
  font: var(--font-m);
  height: var(--size-350);
  /* min-width: var(--size-350); */
  padding: var(--size-100) var(--size-300);
}

.size-l {
  font: var(--font-l);
  height: var(--size-400);
  /* min-width: var(--size-400); */
  padding: var(--size-100) var(--size-400);
}

.variant-accent {
  color: var(--color-white);
  background-color: var(--color-primary);
}

.variant-primary {
  color: var(--color-white);
  background-color: var(--color-primary);
}

.variant-secondary {
  color: var(--color-white);
  background-color: var(--color-primary);
}
</style>
