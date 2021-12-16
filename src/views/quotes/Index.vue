<template>
  <div class="quotes-index">
    <Layout>
      <div class="quote" v-if="quotes.length != 0">
        <RecatangleQuoteCard
          v-for="quote in quotes"
          :key="quote.id"
          :quote="quote.quote"
          :author="quote.author"
          :id="quote.id"
        />
      </div>
      <Loading v-else size="4x" />
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { queryQuotes } from '@/backend/database';
import { useStore } from 'vuex';

import Layout from '@/components/Layout.component.vue';
import Loading from '@/components/Loading.component.vue';
import RecatangleQuoteCard from '@/components/RecatangleQuoteCard.component.vue';
import Quote from '@/types/Quote.type';

const store = useStore()

const quotes = ref<Quote[]>([])

onMounted(async () => {
  store.dispatch('setLoading', true)

  const { data, error } = await queryQuotes()
  if (error) console.error(error)

  quotes.value = data

  store.dispatch('setLoading', false)
})
</script>

<style scoped>
.quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
}
</style>