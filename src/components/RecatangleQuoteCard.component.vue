<template>
  <div class="rectangle-quote-card">
    <router-link :to="`/quotes/${id}`">
      <h1>{{ quote }}</h1>
    </router-link>
    <p>{{ props.author.name }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, onDeactivated, ref } from 'vue'
import User from '@/types/User.type';

interface Props {
  quote: string;
  id: number;
  author: User;
}

const props = defineProps<Props>()
const quote = ref(props.quote)
const screenXsize = ref<number>()

const mutateQuote = () => {
  if (window.innerWidth > 1280) {
    quote.value = props.quote
  } else {
    quote.value = props.quote.slice(0, 18) + '...'
  }
}

const handleResize = () => {
  screenXsize.value = window.innerWidth

  if (screenXsize.value > 1280) {
    quote.value = props.quote
  } else {
    quote.value = props.quote.slice(0, 18) + '...'
  }
}

const created = () => {
  window.addEventListener('resize', handleResize)
  mutateQuote()
}

onDeactivated(() => {
  window.removeEventListener('resize', handleResize)
})

created()
</script>

<style scoped>
.rectangle-quote-card {
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: white;
  @apply hover:bg-gray-300 transition-all;
  color: black;

  @apply w-72 md:w-1/2 h-24 rounded drop-shadow-lg;
  @apply p-5 m-2;
}

h1 {
  @apply text-2xl md:text-3xl font-bold;
}

p {
  @apply text-base md:text-lg font-normal text-gray-600;
}
</style>