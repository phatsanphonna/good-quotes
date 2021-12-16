<template>
  <div class="title">
    <router-link to="/">คำคมสุดเฉียบ</router-link>
    <Loading size="sm" />
  </div>
</template>

<script lang="ts" setup>
import Loading from './Loading.component.vue';
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: row;
  align-items: center;

  @apply font-semibold;
  @apply hover:underline transition-all;
}

.title > * {
  margin: 0px 4px;
}
</style>