<script setup lang="ts">
import { computed, useSlots } from "vue";

type ButtonVariant = "accent" | "primary" | "secondary";
type ButtonSize = "s" | "m" | "l";

type ButtonProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  dataTestId?: string;
  href?: string;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "m",
  variant: "primary",
  disabled: false,
});

const slots = useSlots();

const computedClass = computed(() => {
  const hasTextNodes = slots.default().some((node) => {
    return node.type === Symbol.for("v-txt");
  });

  return [
    "button",
    `variant-${props.variant}`,
    `size-${props.size}`,
    hasTextNodes ? "with-text" : "without-text",
  ];
});

const elementType = computed(() => {
  return props.href ? resolveComponent("NuxtLink") : "button";
});
</script>

<template>
  <component
    :is="elementType"
    :to="props.href"
    :class="computedClass"
    :disabled="props.disabled"
    :data-testid="props?.dataTestId"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.button {
  cursor: pointer;
  border: none;
  user-select: none;
  font-weight: 500 !important;
  border-radius: 9999px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--size-100);
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

.without-text {
  padding-left: 0;
  padding-right: 0;
}
</style>
