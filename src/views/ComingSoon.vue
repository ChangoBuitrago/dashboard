<template>
  <div id="comingSoon" class="ion-page">

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
                <font-awesome-icon slot="start" icon="snowplow" class="fa-fw fa-3x icon-color-secondary"/>
                <ion-label color="primary">
                  <h2>Sorry, we are doing some work on this view.</h2>
                </ion-label>
              </ion-card-content>
            </ion-card>

          </ion-col>
        </ion-row>
       </ion-grid>

    </ion-content>

  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  computed: {
    locale() {
      return {
        title: 'Coming Soon',
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
