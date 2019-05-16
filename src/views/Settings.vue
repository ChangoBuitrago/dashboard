<template>
  <div id="settings" class="ion-page">

    <ion-header>
      <ion-toolbar>
        <ion-title>{{ locale.title }}</ion-title>
        <ion-button fill="clear" @click="gotoPath('/')" routerDirection="root">
          <font-awesome-icon slot="start" icon="chevron-left" class="fa-fw"/>
        </ion-button>
      </ion-toolbar>  
    </ion-header>

    <ion-content class="ion-padding">

      <ion-list>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>@Wattwatchers</ion-label>
          </ion-item-divider>

          <ion-item>
            <ion-label>{{ locale.voltage }}</ion-label>
            <ion-select 
              okText="Okay" cancelText="Dismiss"
              value="aus"
            >
              <ion-select-option value="aus">120</ion-select-option>
              <ion-select-option value="arg">230</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>{{ locale.hertz }}</ion-label>
            <ion-select 
              okText="Okay" cancelText="Dismiss"
              value="aus"
            >
              <ion-select-option value="aus">50</ion-select-option>
              <ion-select-option value="arg">60</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-item-group>

        <ion-item-group>
          <ion-item-divider>
            <ion-label>General</ion-label>
          </ion-item-divider>

          <ion-item>
            <ion-label>{{ locale.country }}</ion-label>
            <ion-select 
              okText="Okay" cancelText="Dismiss"
              value="aus"
            >
              <ion-select-option value="aus">Australia</ion-select-option>
              <ion-select-option value="arg">Argentina</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>{{ locale.language }}</ion-label>
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

          <ion-item>
            <ion-label>{{ locale.notifications}}</ion-label>
            <ion-toggle checked></ion-toggle>
          </ion-item>
                    
          <ion-item button lines="none" @click="gotoPath('/about')" routerDirection="forward">
            <ion-label>
              {{locale.about}}
            </ion-label>
          </ion-item>

        </ion-item-group>
      </ion-list>

    </ion-content>

  </div>
</template>

<script>
  export default {
    name: 'settings',
    props: [
      'i18n',
      'title',
      'voltage',
      'hertz',
      'country',
      'language',
      'notifications',
      'about'
    ],
    data () {
      return { 
        selectedLanguage: 'en',
        languages: ['en', 'es'] 
      }
    },
    computed: {
      locale() {
        return {
          title: this.title,
          voltage: this.voltage,
          hertz: this.hertz,
          country: this.country,
          language: this.language,
          notifications: this.notifications,
          about: this.about
        }
      }
    },
    methods: {
      gotoPath(_path){
        this.$ionic.modalController.dismiss()
      },
      ionChange(value){
        this.selectedLanguage = value

        this.i18n._vm.locale = value
      }
    }
  }
</script>
