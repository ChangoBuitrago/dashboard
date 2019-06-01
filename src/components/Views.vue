<template>
  <div id="views">

    <ion-segment @ionChange="segmentChanged($event)" value="all">
      <ion-segment-button v-for="(value, key) in viewFilters" :key="key" :value="key" color="secondary">
        <ion-label>{{key | capitalize}}</ion-label>
      </ion-segment-button>
    </ion-segment>

    <ion-list inSet="true">
      <ion-item-group v-for="site in getSiteList" :key="site._id">
        <ion-item-divider v-if="views(site._id).length">
          <ion-label>
            <h2>{{ site.name }}</h2> 
            <p>{{ site.description }}</p>
          </ion-label>
        </ion-item-divider>

        <ion-item button lines="none" detail="false" @click="gotoPath('/')" routerDirection="root"
          v-for="view in views(site._id)" :key="view._id"
        >
          <font-awesome-icon slot="start" icon="layer-group" class="fa-fw icon"/>
          <ion-label>
            {{ view.name }}
          </ion-label>
          <font-awesome-icon slot="end" icon="star" v-if="view.favourite" class="fa-fw icon"/>
        </ion-item>

      </ion-item-group>
    </ion-list>
      
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

const viewFilters = {
  recent: 'viewModule/getRecentViewList',
  favourite: 'viewModule/getFavouriteViewList',
  all: 'viewModule/getAllViewList',
}

export default {
  name: 'Views',
  data () {
    return {
      visibility: 'all',
      viewFilters
    }
  },
  computed: {
    // //Using mapState instead of mapGetters to access "this"
    // ...mapState({
    //     getFilterViewList(state, getters) {
    //         return getters[viewFilters[this.visibility]]
    //     }
    // }),
    ...mapGetters({
      'getSiteList':'siteModule/getSiteList'
    }),
  },
  created () {
    this.$store.dispatch('siteModule/getSiteList')
    this.$store.dispatch('viewModule/getViewList')
  },
  methods: {
    views(siteId){
      return this.$store.getters[viewFilters[this.visibility]](siteId)
    },
    segmentChanged(evt) {
      const { value } = evt.detail
      this.visibility = value
    }
  },
  filters: {
    //pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>