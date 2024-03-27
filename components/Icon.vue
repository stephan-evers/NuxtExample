<script setup lang="ts">
import {
  PlusIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/solid";

import DiceIcon from "@/assets/icons/dice.js";
import { computed } from "vue";

type IconProps = {
  name: keyof typeof icons;
  size?: "s" | "m" | "l";
};

const icons = {
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  trash: TrashIcon,
  dice: DiceIcon,
  plus: PlusIcon,
  arrowRight: ArrowRightIcon,
};

const props = withDefaults(defineProps<IconProps>(), {
  size: "m",
});

const computedClass = computed(() => {
  return ["icon", `size-${props.size}`];
});
</script>

<template>
  <component :is="icons[props.name]" :class="computedClass"></component>
</template>

<style scoped>
.icon {
  color: inherit;
  flex-shrink: 0;
}

.size-s {
  width: var(--size-200);
  height: var(--size-200);
}

.size-m {
  width: var(--size-300);
  height: var(--size-300);
}

.size-l {
  width: var(--size-400);
  height: var(--size-400);
}
</style>
