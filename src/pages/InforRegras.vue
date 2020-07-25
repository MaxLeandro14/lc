<template>
  <div>
  <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
 <q-btn  @click="back" flat round dense icon="keyboard_backspace"/>
<q-toolbar-title class="primary-font" style="font-size: 16px;">
Informações e Regras
</q-toolbar-title>
  <!--<q-btn flat round dense icon="more_vert" style="color: #00d15a" />-->
</q-toolbar>
    <div class="q-pa-md q-gutter-sm">
      <div class="row flex-center">
          <q-card class="my-card">
            <q-card-section>
              sAKLD FADGFDS.GF,S GFDHDF H DHÇDGH GHG
              HD HDSHDH HDFHSSFHDSHJ JDSJSDJFJ JFGJGJDFJD JFGJ
              HDHSJH ADHJJ HJSJSJ
            </q-card-section>
          </q-card>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: 'Error404',
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>
