<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import supabase from '@/backend/app';
import { addUser } from '@/backend/database';

const store = useStore()

const created = () => {
  supabase.auth.onAuthStateChange(async (event, session) => {
    switch (event) {
      case 'SIGNED_IN': {
        const { data } = await addUser(`${session?.user?.id}`, session?.user?.user_metadata)
        store.dispatch('setAuthUser', data)
        break
      }
      case 'SIGNED_OUT':
        store.dispatch('setAuthUser', null)
        break
      default:
        break
    }
  })

}
store.dispatch('setLoading', true)
created()
store.dispatch('setLoading', false)
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#app {
  padding: 0;
  margin: 0;
  font-family: "Kanit", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

:root {
  --primary-text-color: #ffffff;
  --secondary-text-color: #aeafff;

  --primary-background-color: #7a88b3;
  --secondary-background-color: #aeafff;
}

.disable-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
