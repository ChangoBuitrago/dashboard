<template>
  <div id="dashboard" class="ion-page">

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
        <ion-buttons slot="end">
          <ion-button fill="clear" routerDirection="root">
            <font-awesome-icon icon="plus" class="fa-fw"/>
          </ion-button>
        </ion-buttons>

      </ion-toolbar>
    </ion-header>

    <ion-content>

      <ion-grid>
        <ion-row>
          <ion-col size="12">

            <ion-card>
              <ion-card-content class="ion-text-center">
                <font-awesome-icon slot="start" icon="file-alt" class="fa-fw fa-3x icon-color-secondary"/>
                <ion-label>
                  <h2>Create new report</h2>
                  <p>You can save your favorite reports here</p>
                </ion-label>
                <ion-button size="small" fill="outline" @click="gotoPath('/')">
                  New Report
                </ion-button>
              </ion-card-content>
            </ion-card>

          </ion-col>
        </ion-row>
       </ion-grid>

    </ion-content>

  </div>
</template>

<script>
import SitesViewItem from '@/components/SitesViewItem.vue'
import Chart from '@/components/Chart.vue'

export default {
  name: 'Dashboard',
  computed: {
    locale() {
      return {
        title: this.$t('app.dashboard.title'),
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

<style lang="scss" scoped>

  ion-card {
    box-shadow: none;

    ion-card-content {
      line-height: 5em;
      padding: 20%;
    }

  }

  ion-label {
    font: 300 18px/14px 'Roboto',sans-serif;
  }

</style>
