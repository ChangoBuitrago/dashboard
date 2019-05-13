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
                  <ion-item href="https://ionicframework.com/docs/">
                    <ion-icon slot="start" color="medium" name="book"></ion-icon>
                    <ion-label>Ionic Documentation</ion-label>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item href="https://ionicframework.com/docs/building/scaffolding">
                    <ion-icon slot="start" color="medium" name="build"></ion-icon>
                    <ion-label>Scaffold Out Your App</ion-label>
                  </ion-item>
                </ion-col>
                <ion-col>
                  <ion-item href="https://ionicframework.com/docs/layout/structure">
                    <ion-icon slot="start" color="medium" name="grid"></ion-icon>
                    <ion-label>Change Your App Layout</ion-label>
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
  props: ['site']
}
</script>

<style scoped>
  .site-card ion-img {
    max-height: 25vh;
    overflow: hidden;
  }
</style>
