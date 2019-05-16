<template>
  <div id="sites" class="ion-page">

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>{{ locale.title }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <SiteList />

      <ion-fab-button class="todo-fab">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-content>
  
  </div>
</template>

<script>
// @ is an alias to /src
import SiteList from '@/components/SiteList.vue'

export default {
  name: 'sites',
  components: {
    SiteList
  },
  computed: {
    locale() {
      return {
        title: this.$t('app.siteList.title')
      }
    }
  }
}
</script>

<style scoped>

  .todo-fab {
    position: fixed;
    bottom: 25px;
    right: 15px;
    font-size: 30px;
  }

</style>
