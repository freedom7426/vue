<template>
    <div>
       <button @click="login" v-if="!islogin">登录</button>
        <button @click="logout" v-else>注销</button>
    </div>
</template>

<script>
    export default {
        methods: {
            login() {
            //    window.isLogin = true
            // 提交mmutation的变更状态
            //    this.$store.commit('login')

            this.$store.dispatch('login','admin').then(() => {
               this.$router.push(this.$route.query.redirect)
            }).catch(() => {
                alert('用户名或密码错误')
            })

              
            },
             logout() {
            //    window.isLogin = false
              this.$store.commit('login')
               this.$router.push('/')
            }
        },
        computed: {
            islogin() {
                return this.$store.state.isLogin
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>