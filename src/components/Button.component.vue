<template>
  <div class="btn">
    <button @click="">สุ่มคำคมใหม่</button>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

interface Props {
  msg?: string
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello'
})
</script>

<style>
</style>