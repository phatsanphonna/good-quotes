<template>
  <div class="me">
    <Layout>
      <div class="title">
        <h1>โปรไฟล์</h1>
      </div>
      <br />
      <form @submit.prevent="handleSubmit">
        <div class="pfp">
          <img :src="store.getters.authUser.profile_picture" />
        </div>
        <br />
        <div>
          <label for="email">อีเมล</label>
          <br />
          <input type="email" autocomplete="off" id="email" v-model="account.email" disabled />
        </div>
        <br />
        <div>
          <label for="name">ชื่อ</label>
          <br />
          <input
            type="text"
            autocomplete="off"
            id="name"
            v-model="account.name"
            placeholder="สมชายคุง"
            required
            :disabled="store.getters.isLoading"
          />
        </div>
        <br />
        <div class="submit disable-select">
          <button type="submit" class="add">แก้ไขข้อมูล</button>
          <button @click="handleSignOut" class="sign-out">ออกจากระบบ</button>
        </div>
      </form>
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';

import Layout from '@/components/Layout.component.vue';
import { signOut } from '@/backend/auth';
import { useRouter } from 'vue-router';
import { updateProfile } from '@/backend/database';

const store = useStore()
const router = useRouter()

const account = reactive({
  email: store.getters.authUser.email,
  name: store.getters.authUser.name
})

const handleSubmit = async () => {
  store.dispatch('setLoading', true)

  const payload = {
    id: store.getters.authUser.id,
    email: store.getters.authUser.email,
    name: account.name,
    quotes_add: store.getters.authUser.quotes_add,
    profile_picture: store.getters.authUser.profile_picture,
    created_at: store.getters.authUser.created_at
  }
  const { error } = await updateProfile(payload)
  if (error) console.error(error)

  store.dispatch('setAuthUser', payload)

  store.dispatch('setLoading', false)
  alert('แก้ไขข้อมูลสำเร็จแล้ว')
}

const handleSignOut = async () => {
  store.dispatch('setLoading', true)

  await signOut()
  store.dispatch('setAuthUser', null)

  router.push({ path: '/login', force: true })

  store.dispatch('setLoading', false)
}

</script>

<style scoped>
.title h1 {
  @apply text-5xl lg:text-7xl font-bold;
}

.pfp {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pfp img {
  border-radius: 50%;
}

form input {
  @apply text-black rounded px-2 py-1 w-auto;
}

form label {
  @apply text-base;
}

.submit {
  @apply flex flex-col justify-center items-center;
}

.submit button {
  @apply px-4 py-2 m-2  rounded-full  transition-all;
}

.submit .add {
  @apply bg-green-500 hover:bg-green-600;
}

.submit .sign-out {
  @apply bg-red-500 hover:bg-red-600;
}
</style>