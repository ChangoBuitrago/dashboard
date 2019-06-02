<template>
  <div id="views" class="ion-page">

    <ion-content>

      <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
        <ion-refresher-content
          pulling-icon="arrow-dropdown"
          refreshing-spinner="crescent">
        </ion-refresher-content>
      </ion-refresher>

      <ion-list inSet="true" v-if="getSiteList.length > 0 && !loading">
        <ion-item-group v-for="site in getSiteList" :key="site._id">
          <ion-item-divider v-if="views(site._id).length">
            <ion-label>
              <h2>{{ site.name }}</h2> 
              <p>{{ site.condensed }}</p>
            </ion-label>
          </ion-item-divider>

          <ion-item button lines="none" detail="false" @click="onSelectedView($event, view._id)" routerDirection="root"
            v-for="view in views(site._id)" :key="view._id"
          >
            <font-awesome-icon slot="start" :icon="['fas', 'layer-group']" class="fa-fw"/>
            <ion-label>
              <h2>{{ view.name }}</h2>
              <p> {{ view.condensed }}</p>
            </ion-label>
            <ion-button fill="clear" @click="toggleFavourite($event, view._id)">
              <font-awesome-icon slot="end" :icon="[view.favourite ? 'fas' : 'far', 'star']" class="fa-fw"/>
            </ion-button>
          </ion-item>

        </ion-item-group>
      </ion-list>

      <!-- // ion-skeleton list -->
      <ion-list inSet="true" v-else>
        <ion-item-group v-for="site in (5 + Math.floor(Math.random() * 10))" :key="site">
          <ion-item-divider>
            <ion-label style="width:100%;">
              <h2><ion-skeleton-text animated :style="`width: ${(30 + Math.floor(Math.random() * 10))}%;`">
              </ion-skeleton-text></h2> 
              <p><ion-skeleton-text animated :style="`width: ${(20 + Math.floor(Math.random() * 10))}%;`">
              </ion-skeleton-text></p>
            </ion-label>
          </ion-item-divider>

          <ion-item v-for="view in (1 + Math.floor(Math.random() * 5))" :key="view">
            <font-awesome-icon slot="start" :icon="['fas', 'layer-group']" class="fa-fw"/>
            <ion-label>
              <h2><ion-skeleton-text animated :style="`width: ${(30 + Math.floor(Math.random() * 10))}%;`">
              </ion-skeleton-text></h2> 
              <p><ion-skeleton-text animated :style="`width: ${(50 + Math.floor(Math.random() * 20))}%;`">
              </ion-skeleton-text></p>
            </ion-label>
            <ion-button fill="clear">
            </ion-button>
          </ion-item>

        </ion-item-group>
      </ion-list>

    </ion-content>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const viewFilters = [
  'viewModule/getRecentViewList',
  'viewModule/getFavouriteViewList',
  'viewModule/getViewList'
]

export default {
  name: 'Views',
  data () {
    return {
      loading: false,
      viewFilters
    }
  },
  computed: {
    ...mapGetters({
      'getSiteList':'siteModule/getSiteList',
      'getSelectedSegment':'siteModule/getSelectedSegment',
    })
  },
  created () {
    this.$store.dispatch('siteModule/apiGetSiteList')
    this.$store.dispatch('viewModule/apiGetViewList')
  },
  methods: {
    views(siteId){
      return this.$store.getters[viewFilters[parseInt(this.getSelectedSegment._id)]](siteId)
    },
    toggleFavourite(evt, viewId){
      // stop event propagation to parent ion-item
      evt.stopPropagation()

      this.$store.dispatch("viewModule/addViewToFavourite", viewId)
    },
    onSelectedView(evt, viewId){
      
      // { dispatch view selection action. }

      this.$parent.hideModal()
    },
    doRefresh(evt) {
      this.loading = true

      this.$store.dispatch('siteModule/apiGetSiteList').then(() => 
        this.$store.dispatch('viewModule/apiGetViewList')).then(() => {
          setTimeout(() => {
            evt.target.complete()

            this.loading = false
          }, 2000);
        })
     
    },
  }
}
</script>