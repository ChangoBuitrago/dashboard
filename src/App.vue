<template>
  <div id="app">

    <ion-app>

      <ion-split-pane>

        <ion-menu>
          <SideMenu />
        </ion-menu>

        <ion-vue-router main />

      </ion-split-pane>

    </ion-app>

  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'

export default {
  name: 'App',
  components: {
    SideMenu
  }
}
</script>

<style lang="scss">
   @import './main.scss'
</style>
