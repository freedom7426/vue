<template>
    <div>
       <button @click="login" v-if="!isLogin">登录</button>
        <button @click="logout" v-else>注销</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

    export default {
        methods: {
            login() {
               // window.isLogin = true
               // 提交mmutation的变更状态
               // this.$store.commit('login')
                // this.$store.dispatch('user/login','admin').then(() => {
                this['user/login']('admin').then(() => {
                //  this.$router.push(this.$route.query.redirect)
                    const redirect = this.$route.query.redirect || '/'
                    this.$router.push(redirect)
                }).catch((ERR) => {
                    alert(ERR)
                    // alert('用户名或密码错误')
                })
            },
             logout() {
              //  window.isLogin = false
              //   this.$store.commit('logout')

              this['user/logout']()
              this.$router.push('/')

            },
            // ...mapMutations('user','login')  这种写法跟当前的login方法重名冲突了
            ...mapActions(['user/login','user/logout'])
        },
        computed: {
            // islogin() {
            //     return this.$store.state.user.isLogin
            // }
            ...mapState('user',['isLogin'])
        },
    }
</script>

<style lang="scss" scoped>

</style>