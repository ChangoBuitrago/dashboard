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
      <Views />
    </ion-content>

  </div>
</template>

<script>
import Views from '@/components/Views.vue'

export default {
  name: 'SitesView',
  components: {
    Views
  },
  computed: {
    locale () {
      return {
        title: this.$t('app.sites.title')
      }
    }
  },
  methods: {
    gotoPath(_path){
      this.$router.push({path: _path}) 
    },
    hideModal(){
      this.$ionic.modalController.dismiss()
        .then(() => this.gotoPath("/"))
    }
  }
  
}
</script>