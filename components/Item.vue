<script setup lang="ts">
import { inject } from "vue";

const item = inject("item", { elementType: "span", elementProps: {} });
</script>

<template>
  <component :is="item.elementType" v-bind="item.elementProps">
    <slot></slot>
  </component>
</template>
