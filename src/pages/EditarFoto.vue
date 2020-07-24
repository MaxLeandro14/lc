<template>
  <div>
  <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
<q-btn  @click="back" flat round dense icon="keyboard_backspace"/>
<q-toolbar-title class="primary-font" style="font-size: 16px;">
Editar foto
</q-toolbar-title>

</q-toolbar>
    <div class="row flex-center">
      <q-avatar size="78px" style="margin-top: 20px;" >
      <img src="~assets/remove/Max.jpg" style="border: 4px solid #fff; margin-bottom: 12px;">
      </q-avatar>
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
<style>
</style>
