<template>
  <div>
  <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
<q-btn  @click="back" flat round dense icon="keyboard_backspace"/>
<q-toolbar-title class="primary-font" style="font-size: 16px;">
Editar informações
</q-toolbar-title>

</q-toolbar>
    <div class="q-pa-md q-gutter-sm">
      <p class="title-infor">Bio</p>
      <q-input
        v-model="text"
        filled
        color="green"
        type="textarea"
      />

      <p class="title-infor">Social e contato</p>
        <q-input outlined bottom-slots v-model="text" label="Telefone" maxlength="12" :dense="dense">
        <template v-slot:before>
          <q-icon name="event" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

      </q-input>

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
.title-infor {
    color: rgb(86, 86, 86);
    font-size: 14px;
    padding: 8px 0px 9px 0px;
    border-radius: 7px;
}
</style>
