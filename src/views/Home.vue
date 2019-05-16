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

    <ion-content class="ion-padding">
      <ion-text class="ion-text-center">
        <h1>{{ locale.welcome }}</h1>
        <p>
          Wattwatchers behind-the-meter energy management technology is connected,<br>
          easy to install, intelligent, and cost-effective.
        </p>
      </ion-text>
    </ion-content>

  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    locale() {
      return {
        title: this.$t('app.home.title'),
        welcome: this.$t('app.home.welcome')
      }
    }
  }
}
</script>