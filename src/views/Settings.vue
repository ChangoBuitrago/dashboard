<template>
  <div id="settings" class="ion-page">

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

    <ion-content class="ion-padding">
      <ion-title>Settings</ion-title>

      <ion-list>
        <ion-item>
          <ion-label>Country</ion-label>
          <ion-select 
            okText="Okay" cancelText="Dismiss"
            value="aus"
          >
            <ion-select-option value="aus">Australia</ion-select-option>
            <ion-select-option value="arg">Argentina</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Language</ion-label>
          <ion-select
            okText="Okay" cancelText="Dismiss"
            :value="selectedLanguage"
            @ionChange="ionChange($event.target.value)"
          >
            <ion-select-option
              v-for="(item, index) in languages"
              :key="`Lang${index}`"
              :value="item"
            >{{ item }}</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

    </ion-content>

  </div>
</template>

<script>
  export default {
    name: 'settings',
    data () {
      return { 
        selectedLanguage: 'en',
        languages: ['en', 'es'] 
      }
    },
    methods: {
      gotoPath(_path){
        this.$router.push({path: _path})
      },
      ionChange(value){
        this.selectedLanguage = value

        this.$i18n._vm.locale = value
      }
    }
  }
</script>