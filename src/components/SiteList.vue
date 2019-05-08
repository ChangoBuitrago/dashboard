<template>
  <ion-list>
    <ion-item v-for="site in sites" :key="site.id">
      {{ site.title }}
    </ion-item>
  </ion-list>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    sites: state => state.sites.all
  }),
  methods: mapActions('cart', [
    'addSiteToCart'
  ]),
  created () {
    this.$store.dispatch('sites/getAllSites')
  }
}
</script>
