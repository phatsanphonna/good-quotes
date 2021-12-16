<template>
  <div class="square-quote-card">
    <div class="quote">
      <h3>{{ props.quote!.quote }}</h3>
      <p>โดย {{ props.quote!.author.name }}</p>
      <!-- <span>วันที่ {{ props.quote.created_at }}</span> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  quote: Quote | undefined;
}

import Quote from '@/types/Quote.type';
import { defineProps, ref } from 'vue'

const props = defineProps<Props>()
const quoteCreatedAt = ref()

quoteCreatedAt.value = () => {
  const time = new Date(props.quote!.created_at)
  return `${time.getDate}/${time.getMonth}/${time.getFullYear}`
}

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