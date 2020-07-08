<template>
  <q-layout>
    <router-view />
    <Footer />
  </q-layout>
</template>

<script>
import Footer from 'layouts/FooterMenu.vue'
export default {
  name: 'MainLayout',
  components: {
    Footer
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
<style>
.img-menu{
  width: 30px
}
</style>
