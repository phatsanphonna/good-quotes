<template>
  <div class="square-quote-card">
    <div class="quote">
      <h3>ถ้าเขาจะรัก ยืนเฉย ๆ เขาก็รัก</h3>
      <p>โดย คนทำเว็บนี้เอง</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.square-quote-card {
  display: flex;
  flex-direction: column;
  @apply p-5 md:p-10;

  background-color: #ffffff;
  @apply w-9/12 md:w-1/2 h-4/6 rounded-lg drop-shadow-lg;

  @apply text-black;
}

.quote h3 {
  text-align: left !important;
  @apply text-3xl md:text-5xl font-bold;
  @apply mb-5;
}

.quote p {
  text-align: left !important;
  @apply text-xl md:text-2xl font-normal;
  @apply mb-5;
}

.nav {
  position: absolute;
  bottom: 0;
}
</style>