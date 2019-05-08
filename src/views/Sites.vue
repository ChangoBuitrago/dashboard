<template>
  <div class="sites">
    <h1>Site List</h1>
    <SiteList />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteList from '@/components/SiteList.vue'

export default {
  name: 'sites',
  components: {
    SiteList
  }
}
</script>