<template>
  <div id="about" class="ion-page">

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h1>Consumption chart</h1>
      <Consumption />
    </ion-content>

  </div>
</template>

<script>
// @ is an alias to /src
import Consumption from '@/components/Consumption.vue'

export default {
  name: 'consumption',
  components: {
    Consumption
  },
  methods: {
    gotoPath(_path){
      this.$router.push({path: _path})
    }
  }
}
</script>