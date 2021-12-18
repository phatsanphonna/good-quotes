<template>
  <div class="home">
    <Layout>
      <div v-if="quote">
        <div class="quote">
          <h1>{{ quote.quote }}</h1>
          <h5>- {{ quote.author.name }}</h5>
        </div>

        <div class="btn">
          <div class="btn-random">
            <button @click="randomQuote">สุ่มคำคมใหม่</button>
          </div>

          <div class="btn-quote">
            <button>
              <router-link :to="`/quotes/${quote.id}`">ดูคำคมนี้</router-link>
            </button>
          </div>
        </div>
      </div>
      <Loading v-else size="4x" />
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex';
import { queryRandomQuote } from '@/backend/database';
import Quote from '@/types/Quote.type';

import Loading from '@/components/Loading.component.vue';
import Layout from '@/components/Layout.component.vue';

const store = useStore()

const quote = ref<Quote | null>(null)

const randomQuote = async () => {
  store.dispatch('setLoading', true)

  const { data, error } = await queryRandomQuote()
  if (error) throw Error(error)

  quote.value = data

  store.dispatch('setLoading', false)
}

onMounted(async () => {
  await randomQuote()
})
</script>

<style scoped>
.quote {
  text-align: center;
  @apply drop-shadow-md;
}

.quote h1 {
  @apply text-5xl md:text-7xl font-bold;
}

.quote h5 {
  @apply text-lg md:text-2xl font-normal;
}

.btn {
  @apply m-5 drop-shadow-md flex justify-center items-center;
}

.btn > * {
  @apply m-2;
}

.btn-random button {
  @apply px-4 py-2 rounded-full bg-white text-black hover:bg-green-600 hover:text-white transition-all;
}

.btn-quote button {
  @apply px-4 py-2 rounded-full bg-white text-black hover:bg-yellow-500 hover:text-white transition-all;
}
</style>