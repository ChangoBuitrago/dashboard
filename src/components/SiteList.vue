<template>
  <ul>
    <li
      v-for="site in sites"
      :key="site.id">
      {{ site.title }}
      <br>
      <button
        :disabled="!site.inventory"
        @click="addSiteToCart(site)">
        Add to cart
      </button>
    </li>
  </ul>
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
