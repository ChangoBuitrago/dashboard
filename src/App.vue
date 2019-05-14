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

            <ion-card>
              <ion-card-header>
                <ion-avatar class="avatar">
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                </ion-avatar>
                <ion-card-subtitle>Installer</ion-card-subtitle>
                <ion-card-title>John Doe</ion-card-title>
              </ion-card-header>
            </ion-card>
            
            <ion-list>
              <ion-menu-toggle auto-hide="false">
                <ion-item button @click="gotoPath('/')" routerDirection="root">
                  <font-awesome-icon slot="start" icon="home" class="fa-fw"/>
                  <ion-label>
                    {{locale.home}}
                  </ion-label>
                </ion-item>
                <ion-item button @click="gotoPath('/sites')" routerDirection="root">
                  <font-awesome-icon slot="start" icon="building" class="fa-fw"/>
                  <ion-label>
                    {{locale.sites}}
                  </ion-label>
                </ion-item>
                <ion-item button @click="gotoPath('/consumption')" routerDirection="root">
                  <font-awesome-icon slot="start" icon="bolt" class="fa-fw"/>
                  <ion-label>
                    {{locale.consumption}}
                  </ion-label>
                </ion-item>
                <ion-item button @click="gotoPath('/about')" routerDirection="root">
                  <font-awesome-icon slot="start" icon="info-circle" class="fa-fw"/>
                  <ion-label>
                    {{locale.about}}
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
  name: 'App',
  computed: {
    locale() {
      return {
        home: this.$t('app.sidemenu.home'),
        sites: this.$t('app.sidemenu.sites'),
        consumption: this.$t('app.sidemenu.consumption'),
        about: this.$t('app.sidemenu.about')
      }
    }
  },
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

  .avatar {
    margin: auto;
  }

</style>
