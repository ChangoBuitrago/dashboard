<template>
  <div id="sideMenu" class="ion-page">
  
    <ion-header>
      <ion-card>
        <ion-card-header>
          <ion-avatar class="ion-margin-bottom">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
          </ion-avatar>
          <ion-card-subtitle>Installer</ion-card-subtitle>
          <ion-card-title>John Doe</ion-card-title>
        </ion-card-header>
      </ion-card>
    </ion-header>

    <ion-content>
      <ion-list class="ion-padding">
        <ion-menu-toggle auto-hide="false">
          <ion-list>
            <ion-list-header>
              <ion-label>Sites</ion-label>
            </ion-list-header>
            <ion-item button lines="none" @click="gotoPath('/sites')" routerDirection="root">
              <font-awesome-icon slot="start" icon="building" class="fa-fw icon"/>
              <ion-label>
                <!-- {{locale.sites}} -->
                <h2>Bayview Office</h2> 
                <p>All Views Data</p>
              </ion-label>
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-list-header>
              <ion-label>Analytics</ion-label>
            </ion-list-header>
            <ion-item button lines="none" detail="false" @click="gotoPath('/')" routerDirection="root">
              <font-awesome-icon slot="start" icon="home" class="fa-fw icon"/>
              <ion-label>
                {{locale.home}}
              </ion-label>
            </ion-item>
            <ion-item button lines="none" detail="false" @click="gotoPath('/dashboard')" routerDirection="root">
              <font-awesome-icon slot="start" icon="tachometer-alt" class="fa-fw icon"/>
              <ion-label>
                {{locale.dashboard}}
              </ion-label>
            </ion-item>
            <ion-item button lines="none" detail="false" @click="gotoPath('/realtime')" routerDirection="root">
              <font-awesome-icon slot="start" icon="stopwatch" class="fa-fw icon"/>
              <ion-label>
                {{locale.realTime}}
              </ion-label>
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-item button lines="none" @click="showModal" routerDirection="root">
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
    showModal: async function() {
      const modal = await this.$ionic.modalController.create({
        component: Settings,
        componentProps: {
          propsData: {
            i18n: this.$i18n,
            title: this.$t('app.settings.title'),
            voltage: this.$t('app.settings.wattwatchers.voltage'),
            hertz: this.$t('app.settings.wattwatchers.hertz'),
            country: this.$t('app.settings.general.country'),
            language: this.$t('app.settings.general.language'),
            notifications: this.$t('app.settings.general.notifications'),
            about: this.$t('app.settings.general.about.title')
          }
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

    .icon {
      color: var(--ion-color-secondary);
    }

  }

</style>
