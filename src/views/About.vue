<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Amchart />
  </div>
</template>

<script>
// @ is an alias to /src
import Amchart from '@/components/Amchart.vue'

export default {
  name: 'about',
  components: {
    Amchart
  }
}
</script>