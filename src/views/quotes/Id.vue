<template>
  <div class="quotes-id">
    <Layout>
      <div class="square-quote-card">
        <div class="quote">
          <h3>{{ quote!.quote }}</h3>
          <p>โดย {{ quote!.author.name }}</p>
          <!-- <span>วันที่ {{ props.quote.created_at }}</span> -->
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { queryOneQuote } from '@/backend/database';
import Quote from '@/types/Quote.type';

import Layout from '@/components/Layout.component.vue';

const route = useRoute()

const quote = ref()

const created = async () => {
  const { data, error } = await queryOneQuote(Number(route.params.id))
  console.log(data)
  if (error) console.error(error)

  quote.value = data
}

onMounted(async () => {
  await created()
})
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