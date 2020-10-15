export default {
    namespaced: true,//设置独立的命名空间，避免命名冲突
    state: {
        isLogin: false,
        username: ''
      },
      mutations: {
        login(state, username){
          state.isLogin = true
          state.username = username
        },
        logout(state){
          state.isLogin = false
          state.username = ''
        }
      },
      getters:{
         welcome: state => state.username + ',欢迎回来~'
      },
      actions: {
        login({ commit },username){
          return new Promise((resolve,reject) => {
            setTimeout(() => {
              if(username === 'admin'){
                commit('login', username)
                resolve()
              }else{
                reject()
              }
            },1000)
          })
        },
        logout({commit}){
            commit('logout')
        }
      },
}