<template>
  <p class="animate-spin" v-if="store.getters.isLoading">
    <font-awesome-icon icon="circle-notch" :size="props.size" />
  </p>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex';

import { SizeProp } from '@fortawesome/fontawesome-svg-core';

const store = useStore()

interface Props {
  size: SizeProp
}
const props = defineProps<Props>()
</script>