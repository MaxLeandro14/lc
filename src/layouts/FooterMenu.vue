<template>
<q-tabs
  v-model="tab"
  indicator-color="transparent"
  active-color="green"
  class="bg-white text-grey-5 shadow-2 fixed-bottom"
>
  <q-route-tab name="home" icon="home" to="/"/>
  <q-route-tab name="book" icon="book" to="/salasPart" />
  <q-route-tab name="search" icon="person_search" to="/searchPerfil" />
  <q-route-tab name="myPerfil" icon="person" to="/myPerfil" />
</q-tabs>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      tab: 'home'
    }
  }
}
</script>
