<template>
  <div class="quotes-id">
    <Layout>
      <SquareQuoteCard />
</Layout>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

import Layout from '@/components/Layout.component.vue';
import SquareQuoteCard from '@/components/SquareQuoteCard.component.vue';
const route = useRoute()
</script>