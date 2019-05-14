<template>
  <div id="consumption" class="ion-page">
    
    <ion-content class="ion-padding">
      <ion-text>
        <h1>Consumption chart</h1>
      </ion-text>

      <Chart />
    
    </ion-content>

  </div>
</template>

<script>
// @ is an alias to /src
import Chart from '@/components/Chart.vue'

export default {
  name: 'consumption',
  components: {
    Chart
  }
}
</script>