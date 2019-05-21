<template>
  <div id="sideMenu" class="ion-page">
  
    <ion-header>
      
      <ion-card>
        <ion-item lines="none" style="padding-top:10px;padding-left:5px;">
          <ion-avatar slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
          </ion-avatar>
          <ion-button fill="outline" slot="end" size="small" color="secondary" @click="gotoPath('/')">
            <font-awesome-icon icon="ellipsis-h" class="fa-fw icon-color-secondary"/>
          </ion-button>  
        </ion-item>

        <ion-card-header>
          <ion-card-subtitle>John Doe</ion-card-subtitle>
          <ion-card-title>Installer</ion-card-title>
        </ion-card-header>

        <ion-item button lines="none" color="primary" @click="showModalSitesView" routerDirection="root">
          <font-awesome-icon slot="start" color="light" icon="building" class="fa-fw icon-color-secondary"/>
          <ion-label color="light">
            <!-- {{locale.sites}} -->
            <h2>Wattwatchers Office</h2> 
            <p>All Views Data</p>
          </ion-label>
        </ion-item>

      </ion-card>
    </ion-header>

    <ion-content>
      <ion-list class="ion-padding">
        <ion-menu-toggle auto-hide="false">

          <ion-list>
            <ion-list-header>
              <ion-label>Overview</ion-label>
            </ion-list-header>
            <ion-item button lines="none" detail="false" @click="gotoPath('/')" routerDirection="root">
              <font-awesome-icon slot="start" icon="home" class="fa-fw icon-color-secondary"/>
              <ion-label>
                {{locale.home}}
              </ion-label>
            </ion-item>
            <ion-item button lines="none" detail="false" @click="gotoPath('/dashboard')" routerDirection="root">
              <font-awesome-icon slot="start" icon="tachometer-alt" class="fa-fw icon-color-secondary"/>
              <ion-label>
                {{locale.dashboard}}
              </ion-label>
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-list-header>
              <ion-label>Reports</ion-label>
            </ion-list-header>
            <ion-item button lines="none" detail="false" @click="gotoPath('/realtime')" routerDirection="root">
              <font-awesome-icon slot="start" icon="stopwatch" class="fa-fw icon-color-secondary"/>
              <ion-label>
                {{locale.realTime}}
              </ion-label>
            </ion-item>
            <ion-item button lines="none" detail="false" @click="gotoPath('/realtime')" routerDirection="root">
              <font-awesome-icon slot="start" icon="solar-panel" class="fa-fw icon-color-secondary"/>
              <ion-label>
                Solar Production
                <!-- {{locale.realTime}} -->
              </ion-label>
            </ion-item>
            <ion-item button lines="none" detail="false" @click="gotoPath('/realtime')" routerDirection="root">
              <font-awesome-icon slot="start" icon="exchange-alt" class="fa-fw icon-color-secondary"/>
              <ion-label>
                Demand Response
                <!-- {{locale.realTime}} -->
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-item button lines="none" @click="showModalSettings" routerDirection="root">
              <ion-label>
                {{locale.settings}}
              </ion-label>
            </ion-item>
            <ion-item button lines="none" detail="false" routerDirection="root">
              <ion-label>
                {{locale.helpCenter}}
              </ion-label>
            </ion-item>
          </ion-list>

        </ion-menu-toggle>
      </ion-list>
    </ion-content>
    
  </div>
</template>

<script>
import SitesView from "@/views/SitesView.vue";
import Settings from "@/views/Settings.vue";

export default {
  name: 'SideMenu',
  computed: {
    locale() {
      return {
        home: this.$t('app.sideMenu.home'),
        dashboard: this.$t('app.sideMenu.dashboard'),
        realTime: this.$t('app.sideMenu.realTime'),
        sites: this.$t('app.sideMenu.sites'),
        bookmarks: this.$t('app.sideMenu.bookmarks'),
        consumption: this.$t('app.sideMenu.consumption'),
        settings: this.$t('app.sideMenu.settings'),
        helpCenter: this.$t('app.sideMenu.helpCenter'),
        about: this.$t('app.sideMenu.about')
      }
    }
  },
  methods: {
    gotoPath(_path){
      this.$router.push({path: _path}) 
    },
    showModalSitesView: async function() {
      const modal = await this.$ionic.modalController.create({
        component: SitesView,
        componentProps: {
          parent: this
        },
        cssClass:"fullScreenModal",
        showBackdrop: false
      });
      await modal.present()
        .then(() => this.gotoPath("/all"))
    },
    showModalSettings: async function() {
      const modal = await this.$ionic.modalController.create({
        component: Settings,
        componentProps: {
          parent: this
        },
        cssClass:"fullScreenModal",
        showBackdrop: false
      });
      await modal.present();
    }
  }
}
</script>

<style lang="scss" scoped>

  #sideMenu {

    .icon-color-primary {
      color: var(--ion-color-primary);
    }
    .icon-color-secondary {
      color: var(--ion-color-secondary);
    }
    .icon-color-light {
      color: var(--ion-color-light);
    }

  }

</style>
