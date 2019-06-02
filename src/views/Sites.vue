<template>
  <div id="sites" class="ion-page">

    <ion-header no-border>
      <ion-toolbar>
        <ion-title>{{ getHeaderTitle }}</ion-title>
        <ion-button fill="clear" @click="hideModal" routerDirection="root">
          <font-awesome-icon slot="start" icon="chevron-left" class="fa-fw"/>
        </ion-button>
      </ion-toolbar>  
      <ion-segment @ionChange="segmentChanged($event)" v-bind:value="getSelectedSegment._id" class="ion-padding">
        <ion-segment-button v-for="(segment, key) in getSegmentList" :key="key" :value="segment._id">
          <ion-label>{{segment.label | capitalize}}</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-header>

    <ion-content>
      <Views />
    </ion-content>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Views from './Views.vue'

export default {
  name: 'Sites',
  components: {
    Views
  },
  computed: {
    ...mapGetters({
      'getHeaderTitle':'siteModule/getHeaderTitle',
      'getSegmentList':'siteModule/getSegmentList',
      'getSelectedSegment':'siteModule/getSelectedSegment'
    })
  },
  created () {
    this.$store.dispatch('siteModule/setSegmentList')
    this.$store.dispatch('siteModule/setSelectedSegment', this.getSelectedSegment._id)
  },
  methods: {
    hideModal(){
      this.$ionic.modalController.dismiss()
    },
    segmentChanged(evt) {
      const segmentId = evt.detail.value

      this.$store.dispatch('siteModule/setSelectedSegment', segmentId)
    },
  },
  filters: {
    //capitalize: s => s.charAt(0).toUpperCase() + s.slice(1),
    capitalize: s => s.toUpperCase()
  }
  
}
</script>