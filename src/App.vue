<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>

      <p v-if="isLogin">{{ welcome }} <button>注销</button></p>
    </div>
      <keep-alive include="about">
        <router-view></router-view>
     </keep-alive>


  </div>
</template>
<script>
import { mapState, mapGetters} from 'vuex'

export default {
  name: 'app',
  computed:{
    ...mapState('user', ['isLogin']),
    ...mapGetters('user', ['welcome']),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
