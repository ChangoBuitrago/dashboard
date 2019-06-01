<template>
  <div id="sites">

    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
    
    <ion-list>
      <ion-item-group v-for="site in sites" :key="site._id">
        <ion-item-divider>
          <ion-label>
            <h2>{{ site.name }}</h2> 
            <p>{{ site.description }}</p>
          </ion-label>
        </ion-item-divider>
        
        <Views />

      </ion-item-group>
    </ion-list>      

  </div>
</template>

<script>
import { mapState } from 'vuex'
import Views from '@/components/Views.vue'

export default {
  name: 'Sites',
  components: {
    Views
  },
  computed: mapState({
    sites: state => state.siteModule.sites,
  }),
  created () {
    this.$store.dispatch('siteModule/getSiteList')
  },
  methods: {
    doRefresh(event) {
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    },
  }
}
</script>