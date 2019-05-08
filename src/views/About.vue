<template>
  <div class="about">
    <h1>This is a Consumption chart</h1>
    <Consumption />
  </div>
</template>

<script>
// @ is an alias to /src
import Consumption from '@/components/Consumption.vue'

export default {
  name: 'about',
  components: {
    Consumption
  }
}
</script>