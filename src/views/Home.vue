<template>
  <div id="home" class="ion-page">

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
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-searchbar></ion-searchbar>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" size-lg>
            <ion-label>
              <h2 class="ion-padding-start ion-padding-top">What are your Top 3 Channels?</h2>
            </ion-label>
            <ion-card>
              <ion-card-content>
                <PieChart />
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        
        <ion-row>
          <ion-col size="12" size-lg>
            <ion-label>
              <h2 class="ion-padding-start ion-padding-top">What does your Aggregated Consumption looks like?</h2>
            </ion-label>
            <ion-card>
              <ion-card-content>
                <XYChart />
              </ion-card-content>
            </ion-card>
          </ion-col>

          <!-- <ion-col size="12" size-lg="4">
            <ion-label>
              <h2 class="ion-padding-start ion-padding-top">>Real time Report</h2>
            </ion-label>
            <ion-card>
              <ion-card-content>

              </ion-card-content>
            </ion-card>
          </ion-col> -->
        </ion-row>

        <ion-row>
          <ion-col size="12" size-lg>
            <ion-label>
              <h2 class="ion-padding-start ion-padding-top">Air Conditioning channel Live Data</h2>
            </ion-label>
            <ion-card>
              <ion-card-content>
                <LiveChart />
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" size-lg>
            <ion-label>
              <h2 class="ion-padding-start ion-padding-top">Which Switches are now Active?</h2>
            </ion-label>
            <ion-card>
              <ion-card-content>
                
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

      </ion-grid>

    </ion-content>

  </div>
</template>

<script>
import XYChart from '@/components/XYChart.vue'
import PieChart from '@/components/PieChart.vue'
import LiveChart from '@/components/LiveChart.vue'

export default {
  name: 'Home',
  components: {
    XYChart,
    PieChart,
    LiveChart
  },
  computed: {
    locale() {
      return {
        title: this.$t('app.home.title')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  ion-card {
    min-height: 400px;
    border-radius: 0;
    margin: none;
  }

  ion-label {
    font: 300 18px/14px 'Roboto',sans-serif;
  }

</style>
