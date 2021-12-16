<template>
  <div class="quotes-id">
    <Layout>
      <SquareQuoteCard :quote="quote" />
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { queryOneQuote } from '@/backend/database';
import Quote from '@/types/Quote.type';

import Layout from '@/components/Layout.component.vue';
import SquareQuoteCard from '@/components/SquareQuoteCard.component.vue';


const route = useRoute()

const quote = ref<Quote | undefined>()

onMounted(async () => {
  const { data, error } = await queryOneQuote(Number(route.params.id))

  if (error) console.error(error)

  quote.value = data
})

</script>