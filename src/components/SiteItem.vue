<template>

  <ion-item>

    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-card class="site-card">
            <ion-img :src="site.url"></ion-img>
            <ion-card-header>
              <!-- <ion-card-subtitle>Get Started</ion-card-subtitle> -->
              <ion-card-title>{{ site.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ion-row>
                <ion-col>
                  <ion-item button lines="none" @click="gotoPath(`/sites/${site.id}/consumption`)" routerDirection="root">
                    <font-awesome-icon slot="start" icon="bolt" class="fa-fw"/>
                    <ion-label>
                      {{locale.consumption}}
                    </ion-label>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item button lines="none" @click="gotoPath(`/sites/${site.id}/circuits`)" routerDirection="root">
                    <font-awesome-icon slot="start" icon="microchip" class="fa-fw"/>
                    <ion-label>
                      {{locale.circuits}}
                    </ion-label>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item button lines="none" @click="gotoPath(`/sites/${site.id}/switches`)" routerDirection="root">
                    <font-awesome-icon slot="start" icon="toggle-on" class="fa-fw"/>
                    <ion-label>
                      {{locale.switches}}
                    </ion-label>
                  </ion-item>
                </ion-col>
              </ion-row>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>  
    </ion-grid>

  </ion-item>

</template>

<script>
//import { mapState, mapActions } from 'vuex'

export default {
  name: "SiteItem",
  props: ['site'],
  computed: {
    locale() {
      return {
        consumption: this.$t('app.siteList.siteItem.consumption'),
        circuits: this.$t('app.siteList.siteItem.circuits'),
        switches: this.$t('app.siteList.siteItem.switches')
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

<style scoped>
  .site-card ion-img {
    max-height: 25vh;
    overflow: hidden;
  }
</style>
