<template>
  <div id="app">
  
    <ion-app>
      <ion-split-pane>

        <ion-menu>
          <ion-header>
            <ion-toolbar color="primary">
              <ion-title>Menu</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content>
            <ion-list>
              <ion-menu-toggle auto-hide="false">
                <ion-item button @click="gotoPath('/home')" routerDirection="root">
                  <font-awesome-icon slot="start" icon="home" class="fa-fw"/>
                  <ion-label>
                    Home
                  </ion-label>
                </ion-item>
                <ion-item button @click="gotoPath('/about')" routerDirection="root">
                  <font-awesome-icon slot="start" icon="bicycle" class="fa-fw"/>
                  <ion-label>
                    About
                  </ion-label>
                </ion-item>
                <ion-item button @click="gotoPath('/sites')" routerDirection="root">
                  <font-awesome-icon slot="start" icon="building" class="fa-fw"/>
                  <ion-label>
                    Sites
                  </ion-label>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </ion-content>
        </ion-menu>

        <ion-vue-router main/>

      </ion-split-pane>
    </ion-app>
      
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    gotoPath(_path){
      this.$router.push({path: _path})
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
