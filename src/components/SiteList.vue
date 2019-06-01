<template>

  <ion-content style="z-index: 0;">
    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
    
    <ion-list>
      <SiteItem v-for="site in sites" :key="site.id" :site="site" />
    </ion-list>
  </ion-content>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import SiteItem from './SiteItem.vue'

export default {
  name: "SiteList",
  components: { SiteItem },
  computed: mapState({
    sites: state => state.sites.all
  }),
  methods: {
    doRefresh(event) {
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    }
  },
  // methods: mapActions('site', [
  //   'addSiteToList'
  // ]),
  created () {
    this.$store.dispatch('sites/getSiteList')
  }
}
</script>