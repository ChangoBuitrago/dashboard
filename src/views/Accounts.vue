<template>
  <div id="accounts" class="ion-page">

    <ion-header>
      <ion-toolbar>
        <ion-button fill="clear" slot="start" @click="hideModal" routerDirection="root">
          <font-awesome-icon icon="chevron-left" class="fa-fw icon-color-primary-contrast"/>
        </ion-button>
        <ion-title>{{ locale.title }}</ion-title>
        <ion-button fill="clear" slot="end" color="light" routerDirection="root">
          <ion-label>
            Edit
          </ion-label>
        </ion-button>
      </ion-toolbar>  
    </ion-header>

    <ion-content class="ion-padding">

      <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <img src="GlennBeames.jpeg">
          </ion-avatar>
          <ion-label>
            <h2>glennbeames@gmail.com</h2>
            <p>Glenn Beames</p>
          </ion-label>
          <ion-checkbox slot="end" checked="true"></ion-checkbox>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="GlennBeamesWWs.jpg">
          </ion-avatar>
          <ion-label>
            <h2>glenn@wattwatchers.com.au</h2>
            <p>Glenn Beames</p>
          </ion-label>
          <ion-checkbox slot="end" checked="false"></ion-checkbox>
        </ion-item>

        <ion-item button detail="false" routerDirection="root">
          <ion-label>
            <p>Create a new Account</p>
          </ion-label>
        </ion-item>

        <ion-item button detail="false" routerDirection="root">
          <ion-label>
            <p>Add an existing Account</p>
          </ion-label>
        </ion-item>
      </ion-list>

    </ion-content>

  </div>
</template>

<script>
  export default {
    name: 'accounts',
    data () {
      return { 
        selectedLanguage: 'en',
        languages: ['en', 'es'] 
      }
    },
    computed: {
      locale() {
        return {
          title: this.$t('app.accounts.title')
        }
      }
    },
    methods: {
      hideModal(){
        this.$ionic.modalController.dismiss()
      },
      ionChange(value){
        this.selectedLanguage = value

        this.$i18n._vm.locale = value
      }
    }
  }
</script>
