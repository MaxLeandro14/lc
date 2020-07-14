<template>
  <div>
  <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
  <q-btn  @click="back" flat round dense icon="keyboard_backspace"/>
<q-toolbar-title class="primary-font" style="font-size: 16px;">
Anotação
</q-toolbar-title>
  <q-btn flat round dense icon="more_vert" style="color: #00d15a">

    <q-menu
      transition-show="jump-down"
      transition-hide="jump-up"
    >
    <q-list style="min-width: 100px">

      <q-item clickable v-ripple>
        <q-item-section avatar style="min-width: 40px; color: rgb(0, 209, 90);">
          <q-icon name="list_alt" />
        </q-item-section>

        <q-item-section>
          Novo
        </q-item-section>
      </q-item>

    </q-list>
    </q-menu>

  </q-btn>
</q-toolbar>
    <div class="q-pa-md q-gutter-sm">
      <div class="row">

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
