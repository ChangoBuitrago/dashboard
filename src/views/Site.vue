<template>
  <div id="site" class="ion-page">

    <ion-header>
      <ion-toolbar>
        <ion-item button lines="none" @click="gotoPath('/sites')" routerDirection="root">
          <font-awesome-icon slot="start" icon="building" class="fa-fw"/>
          <ion-label>
            {{ locale.backButton }}
          </ion-label>
        </ion-item>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-vue-router/>
    </ion-content>
    
  </div>
</template>

<script>

export default {
  name: 'site',
  computed: {
    locale() {
      return {
        backButton: this.$t('app.siteList.siteItem.backButton')
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
