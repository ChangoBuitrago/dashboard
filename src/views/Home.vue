<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to WWs Dashboard App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .logo {
    margin: 20px; 
    background: #0e0e0e;
  }
</style>
