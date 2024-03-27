<template>
  <section :class="$style.hero">
    <h1 :class="$style.heading">{{ $t("hero.title") }}</h1>
    <p :class="$style.body">{{ $t("hero.body") }}</p>
    <Button href="/eurojackpot" :class="$style.button"
      >{{ $t("hero.button") }}<Icon name="arrowRight"
    /></Button>
  </section>
</template>

<style module>
.hero {
  background: #eac837;
  color: #2d0000;
  padding: var(--size-200) var(--size-200) var(--size-250);
  border: var(--size-1) solid transparent;
  border-radius: var(--size-4);
  display: flex;
  flex-direction: column;
  gap: var(--size-200);
}

@media (min-width: 768px) {
  .hero {
    align-items: flex-start;
  }
}

.heading {
  font: var(--font-400);
  font-weight: 500;
  margin: 0;
}

.body {
  font: var(--font-200);
  margin: 0;
}

.button {
  margin-top: var(--size-200);
}
</style>
