<template>
  <div id="about" class="ion-page">

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
      <ion-card class="welcome-card">
        <ion-card-content>
          <img class="logo" alt="Vue logo" src="../assets/logo.png">
        </ion-card-content>
        <p v-html="locale.description" class="text"></p>  
      </ion-card>
    </ion-content>>

  </div>
</template>

<script>
  export default {
    name: 'about',
    computed: {
      locale() {
        return {
          title: this.$t('app.settings.general.about.title'),
          description: this.$t('app.settings.general.about.description')
        }
      }
    }
  }
</script>

<style scoped>

  .welcome-card ion-img {
    max-height: 25vh;
    overflow: hidden;
  }

  .logo {
    margin: auto; 
    width: 500px;
  }

  p {
    text-align: left;
    padding: 40px;
  }

</style>