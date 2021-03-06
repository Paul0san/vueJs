import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    loggedIn (state){
      state.loggedIn = true
    }
  },
  actions: {
    mockLogin(context){
      setTimeout( function() {
        context.commit('loggedIn')
      })
    }
  },
})
