<template>
  <div class="login">
    <Layout>
      <div class="title">
        <h1>ลงชื่อเข้าใช้</h1>
      </div>
      <br />
      <button @click="handleSignIn">ลงชื่อเข้าใช้ด้วย Google</button>
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import { signInWithGoogle } from '@/backend/auth';

import Layout from '@/components/Layout.component.vue';

const handleSignIn = async () => {
  await signInWithGoogle()
}
</script>

<style>
.title h1 {
  @apply text-5xl lg:text-7xl font-bold;
}

.login button {
  @apply px-3 py-2 text-xl bg-green-600 hover:bg-green-700 transition-all rounded-lg;
}
</style>