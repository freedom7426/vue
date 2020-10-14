<template>
    <div>
       <p>这是{{$route.params.name}}详情页</p>
    </div>
</template>

<script>
    export default {
        watch: {
            $route: {
                immediate: true,
                handler() {
                    console.log("获取内容")
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>