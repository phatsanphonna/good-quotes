<template>
  <header class="header">
    <div class="title">
      <router-link to="/">คำคมสุดเฉียบ</router-link>
      <Loading v-if="store.getters.isLoading" />
    </div>

    <div>
      <div class="user">
        <span class="nav-col">
          <router-link to="/quotes" class="nav">ดูคำคม</router-link>
          <router-link to="/quotes/add">
            {{ ' ' }}|
            <span class="nav">เพิ่มคำคม</span>
          </router-link>
        </span>

        <img
          @click="() => caretClick = !caretClick"
          :src="store.getters.authUser.profile_picture"
          v-if="store.getters.authUser"
          class="pfp"
        />
        <font-awesome-icon icon="user" @click="() => caretClick = !caretClick" v-else />

        <p @click="() => caretClick = !caretClick">
          <font-awesome-icon icon="caret-up" v-if="caretClick" />
          <font-awesome-icon icon="caret-down" v-else />
        </p>
      </div>

      <div v-if="caretClick">
        <div class="dropdown" v-if="store.getters.authUser">
          <div class="popover">
            <div class="menu">
              <ul>
                <li>
                  <router-link to="/me">โปรไฟล์</router-link>
                </li>
                <hr />
                <li @click="handleSignOut" style="color: red;">ออกจากระบบ</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="dropdown sign-in" v-else>
          <div class="popover">
            <div class="menu">
              <ul>
                <li @click="handleSignIn" style="color: green;">
                  ลงชื่อเข้าใช้ด้วย{{ ' ' }}
                  <font-awesome-icon :icon="['fab', 'google']" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { signInWithGoogle, signOut } from '@/backend/auth';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import Loading from './Loading.component.vue';

const store = useStore()
const router = useRouter()

const caretClick = ref(false)

const handleSignIn = async () => {
  caretClick.value = false
  await signInWithGoogle()
}

const handleSignOut = async () => {
  caretClick.value = false
  await signOut()
  router.push({ path: '/login' })
}
</script>

<style scoped>
.header {
  @apply container mx-auto;
  height: 2rem;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .title {
  display: flex;
  flex-direction: row;
  align-items: center;

  @apply font-semibold;
  @apply hover:underline transition-all;
}

.header .title > * {
  margin: 0px 4px;
}

.header .user {
  display: flex;
  flex-direction: row;

  align-items: center;
}

.header .user > * {
  margin: 0px 4px;
}

.pfp {
  border-radius: 50%;

  @apply shadow-lg;
  @apply h-8 ml-4;

  color: black;
}

.dropdown {
  position: absolute;
  transform: translate(40%, 0px);
  margin-top: 12px;
}

.sign-in {
  transform: translate(0%, 0px) !important;
}

.dropdown .popover {
  display: inline-block;
  position: relative;
}

.dropdown .menu {
  color: #000000;
  display: inline-block;
  text-align: left;
  background-color: #ffffff;
  max-width: 100vw;
  @apply shadow-lg;
  border-radius: 5px;
}

.menu ul,
.menu hr {
  max-width: 100%;
  padding: 8px 20px;
}

.menu hr {
  height: 2px;
}

.nav-col .nav {
  @apply hover:text-blue-100 transition-all;
}
</style>