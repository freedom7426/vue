<template>
  <div>
    <ul>

      <li v-for="c in courses" :key="c.name" @click="onClick(c)">
          {{c.name}}
      </li>
     
      <!-- <li v-for="c in courses" :key="c.name">
              <router-link :to="`/about/course/${c.name}`">
                {{c.name}}
               </router-link>
      </li> -->

      <router-view></router-view>
 
      
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        selectedCourse: '',
        courses:[{name:"khkkj"},{name:"kjhkjlalskl"}]
      }
    },
    methods: {
      onClick(c) {
        this.selectedCourse = c
        this.$router.push(`/about/course/${c.name}`)
      
      }
    },
    activated(){
     console.log(111)
    },
    deactivated(){
       console.log(3333)
    }

  }
</script>

<style lang="scss" scoped>

</style>
