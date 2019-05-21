<template>
  <div id="sitesView" class="ion-page">

    <ion-header no-border>
      <ion-toolbar>
        <ion-title>{{ locale.title }}</ion-title>
        <ion-button fill="clear" @click="hideModal" routerDirection="root">
          <font-awesome-icon slot="start" icon="chevron-left" class="fa-fw"/>
        </ion-button>
      </ion-toolbar>  
    </ion-header>

    <ion-content  class="ion-padding">

      <ion-tabs>

        <ion-tab-bar slot="top">
          <ion-tab-button tab="recents">
            <ion-label>Recents</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="favorites">
            <ion-label>Favorites</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="all">
            <ion-label>All</ion-label>
          </ion-tab-button>
        </ion-tab-bar>

        <ion-tab tab="recents">
          <ion-content class="ion-padding">
            Recents
          </ion-content>
        </ion-tab>
        
        <ion-tab tab="favorites">
          <ion-content class="ion-padding">
            Favorites
          </ion-content>
        </ion-tab>

        <ion-tab tab="all">
          <ion-content class="ion-padding">
            <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
              <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            
            <ion-list>
              <ion-item-group v-for="site in sites" :key="site.id">
                <ion-item-divider>
                  <ion-label>
                    <h2>@Wattwatchers Office</h2> 
                    <p>201/28 Chandos St, St Leonards</p>
                  </ion-label>
                </ion-item-divider>
                
                <ion-list>
                  <ion-item button lines="none" detail="false" @click="gotoPath('/')" routerDirection="root"
                    v-for="site in sites" :key="site.id"
                  >
                    <font-awesome-icon slot="start" icon="layer-group" class="fa-fw icon"/>
                    <ion-label>
                      {{site.title}}
                    </ion-label>
                    <font-awesome-icon slot="end" icon="star" class="fa-fw icon"/>
                  </ion-item>
                </ion-list>

              </ion-item-group>
            </ion-list>

          </ion-content>          
        </ion-tab>
      </ion-tabs>

    </ion-content>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SitesViewItem from '@/components/SitesViewItem.vue'

export default {
  name: 'SitesView',
  components: {
    SitesViewItem
  },
  computed: mapState({
    sites: state => state.sites.all,
    locale (state) {
      return {
        title: this.$t('app.sites.title')
      }
    }
  }),
  created () {
    this.$store.dispatch('sites/getAllSites')
  },
  methods: {
    gotoPath(_path){
      this.$router.push({path: _path}) 
    },
    doRefresh(event) {
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    },
    // mapActions('site', [
    //     'addSiteToList'
    //   ])
    // },
    hideModal(){
      this.$ionic.modalController.dismiss()
        .then(() => this.gotoPath("/"))
    }
  }
}
</script>