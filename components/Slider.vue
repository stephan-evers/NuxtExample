<script setup lang="ts">
import { ref, useSlots, computed, provide } from "vue";

const sliderRef = ref<HTMLElement|null>(null);

const scroll = async (direction: 1 | -1) => {
  if (!sliderRef.value) return;
  const galleryWidth = sliderRef.value.offsetWidth;
  const scrollAmount = (direction * galleryWidth) / 4;
  sliderRef.value.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

provide("item", {
  elementType: "li",
  elementProps: { class: "item" },
});
</script>

<template>
  <div class="slider-container">
    <Button class="button-prev" @click="() => scroll(-1)">
      <Icon name="chevronLeft" />
    </Button>
    <ul class="slider" ref="sliderRef">
      <slot></slot>
    </ul>
    <Button class="button-next" @click="() => scroll(1)">
      <Icon name="chevronRight" />
    </Button>
  </div>
</template>

<style scoped>
.slider-container {
  position: relative;
}

.slider {
  max-width: 100%;
  list-style: none;
  padding: var(--size-100) 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: var(--size-100);
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.slider::-webkit-scrollbar {
  display: none;
}

:deep(.item) {
  display: inline-flex;
  width: 100%;
  flex-shrink: 0;
  scroll-behavior: smooth;
  scroll-snap-align: start;
  justify-content: center;
}

@media (min-width: 768px) {
  :deep(.item) {
    width: calc(50% - var(--size-100));
  }
}

@media (min-width: 992px) {
  :deep(.item) {
    width: calc(33.3333% - var(--size-100));
  }
}

@media (min-width: 1200px) {
  :deep(.item) {
    width: calc(25% - var(--size-100));
  }
}

.button-prev {
  position: absolute !important;
  left: 0 !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
}

.button-next {
  position: absolute !important;
  right: 0 !important;
  top: 50% !important;
  transform: translate(50%, -50%) !important;
}
</style>
