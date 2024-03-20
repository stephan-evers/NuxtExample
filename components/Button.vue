<script setup lang="ts">
type ButtonVariant = "accent" | "primary" | "secondary";
type ButtonSize = "s" | "m" | "l";

type ButtonProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  dataTestId?: string;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "m",
  variant: "primary",
  disabled: false,
});

const computedClass = computed(() => {
  return ["button", `variant-${props.variant}`, `size-${props.size}`];
});
</script>

<template>
  <button
    :class="computedClass"
    :disabled="props.disabled"
    :data-testid="props?.dataTestId"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  border: none;
  user-select: none;
  font-weight: 500 !important;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

:deep(.icon) {
  margin: 0 -9999px;
}

.size-s {
  font: var(--font-100);
  min-height: var(--size-400);
  min-width: var(--size-400);
  padding: 0 var(--size-200);
}

.size-m {
  font: var(--font-300);
  min-height: var(--size-500);
  min-width: var(--size-500);
  padding: 0 var(--size-250);
}

.size-l {
  font: var(--font-500);
  min-height: var(--size-600);
  min-width: var(--size-600);
  padding: 0 var(--size-300);
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

.button[disabled] {
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.5;
  pointer-events: none;
}
</style>
