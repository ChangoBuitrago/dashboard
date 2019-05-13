<template>
  <div id="home">

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card class="welcome-card">
        <ion-card-content>
          <img class="logo" alt="Vue logo" src="../assets/logo.png">
        </ion-card-content>
        <HelloWorld :msg="locale.welcome" />
      </ion-card>
    </ion-content>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    locale() {
      return {
        welcome: this.$t('home.welcome')
      }
    }
  },
}
</script>

<style scoped>

  .welcome-card ion-img {
    max-height: 35vh;
    overflow: hidden;
  }

  .logo {
    margin: auto; 
    background: #0e0e0e;
    width: 500px;
  }
</style>
