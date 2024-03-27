<template>
  <section class="layout">
    <header class="header">
      <img class="logo" src="/eurojackpot.svg" width="236" height="100" />
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </section>
</template>

<style scoped>
:root {
  --eurojackpot-logo: url("/eurojackpot.svg");
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--size-200);
  padding-bottom: var(--size-900);
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 768px) {
  .header {
    flex-direction: row;
  }
}
</style>
