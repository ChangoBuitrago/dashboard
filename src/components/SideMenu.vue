<template>
  <div id="sideMenu" class="ion-page">
  
    <ion-header>
      
      <ion-card>
        <ion-item lines="none" style="padding-top:15px;padding-left:5px;">
          <ion-avatar slot="start">
            <img src="GlennBeames.jpeg">
          </ion-avatar>
          <ion-button shape="round" fill="outline" slot="end" size="small" color="secondary" @click="showModalAccounts" class="button-shape-round">
            <font-awesome-icon icon="ellipsis-h" class="fa-fw-8 icon-color-secondary"/>
          </ion-button>  
        </ion-item>

        <ion-card-header>
          <ion-card-subtitle>Glenn Beames</ion-card-subtitle>
          <ion-card-title>Electrician</ion-card-title>
        </ion-card-header>

        <ion-item button lines="none" color="primary" @click="showModalSites" routerDirection="root">
          <font-awesome-icon slot="start" color="light" icon="building" class="fa-fw icon-color-secondary"/>
          <ion-label color="light">
            <!-- {{locale.sites}} -->
            <h2>{{ site.name || "Wattwatchers HQ" }}</h2> 
            <p>{{ view.name || " Master View" }}</p>
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
            <ion-item button lines="none" detail="false" @click="gotoPath('/coming-soon')" routerDirection="root">
              <font-awesome-icon slot="start" icon="stopwatch" class="fa-fw icon-color-secondary"/>
              <ion-label>
                {{locale.realTime}}
              </ion-label>
            </ion-item>
            <ion-item button lines="none" detail="false" @click="gotoPath('/coming-soon')" routerDirection="root">
              <font-awesome-icon slot="start" icon="solar-panel" class="fa-fw icon-color-secondary"/>
              <ion-label>
                Solar Production
                <!-- {{locale.realTime}} -->
              </ion-label>
            </ion-item>
            <ion-item button lines="none" detail="false" @click="gotoPath('/coming-soon')" routerDirection="root">
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
            <ion-item button lines="none" detail="false" href="https://wattwatchers.com.au/support/" routerDirection="root">
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
import Sites from "@/views/Sites.vue";
import Settings from "@/views/Settings.vue";
import Accounts from "@/views/Accounts.vue";
import { mapGetters } from 'vuex'

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
    },
    ...mapGetters({
      'site':'siteModule/getSelectedSite',
      'view':'viewModule/getSelectedView',
    })
  },
  methods: {
    gotoPath(_path){
      this.$router.push({path: _path}) 
    },
    showModalSites: async function() {
      const modal = await this.$ionic.modalController.create({
        component: Sites,
        componentProps: {
          parent: this
        },
        cssClass:"fullScreenModal",
        showBackdrop: false
      });
      await modal.present()
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
    },
    showModalAccounts: async function() {
      const modal = await this.$ionic.modalController.create({
        component: Accounts,
        componentProps: {
          parent: this
        },
        cssClass:"halfScreenModal",
      });
      await modal.present();
    }
  }
}
</script>

<style lang="scss" scoped>

  ion-avatar {
    height: 40px;
    width: 40px;
  }

  .button-shape-round {
    --border-radius:100%;
    min-height:60%;
  }

</style>