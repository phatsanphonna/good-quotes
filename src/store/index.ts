import { createStore } from 'vuex'

import User from '@/types/User.type'

export default createStore({
  state: {
    isLoading: false,
    authUser: null as User | null
  },
  mutations: {
    SET_LOADING_STATE: (state, payload) => state.isLoading = payload,
    SET_AUTH_USER: (state, payload) => state.authUser = payload
  },
  getters: {
    isLoading: state => state.isLoading,
    authUser: state => state.authUser
  },
  actions: {
    setLoading: (context, value) => context.commit('SET_LOADING_STATE', value),
    setAuthUser: (context, value) => context.commit('SET_AUTH_USER', value)
  }
})
