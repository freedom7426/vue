import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import persist from './plugins/persist'
Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    user,
  },
  strict: true,  //打开严格模式，防止用户手动修改状态
  plugins: [persist]
})
