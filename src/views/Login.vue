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
               window.isLogin = true
               this.$router.push(this.$route.query.redirect)
            },
             logout() {
               window.isLogin = false
               this.$router.push('/')
            }
        },
        computed: {
            islogin() {
                return window.isLogin
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>