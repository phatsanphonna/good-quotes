<template>
  <div class="root">
    <Navbar class="disable-select" />
    <main class="main">
      <slot></slot>
    </main>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Navbar from './Navbar.component.vue';
import Footer from './Footer.component.vue';
</script>

<style scoped>
.root {
  display: grid;
  grid-template-rows: auto 1fr auto;

  min-height: 100vh;
  padding: 20px;

  background-color: var(--primary-background-color);
  color: var(--primary-text-color);
}

.root .main {
  @apply container mx-auto;
  @apply flex flex-col justify-center items-center;
}
</style>