<template>
  <div>
  <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
<q-btn  @click="back" flat round dense icon="keyboard_backspace"/>
<q-toolbar-title class="primary-font" style="font-size: 16px;">
Seguidores
</q-toolbar-title>
  <q-btn flat round dense icon="more_vert" style="color: #00d15a" >
      <q-menu
      transition-show="jump-down"
      transition-hide="jump-up"
    >
    <q-list style="min-width: 130px">

      <q-item clickable v-ripple>
        <q-item-section avatar style="min-width: 40px; color: rgb(171, 168, 168);">
          <q-icon name="account_circle" />
        </q-item-section>

        <q-item-section>
          Lista de bloqueio
        </q-item-section>
      </q-item>

    </q-list>
    </q-menu>
  </q-btn>
</q-toolbar>
    <div class="q-pa-md q-gutter-sm">
      <div style="width: 100%;">

      <div class="box-seguid">
      <div class="row">
        <div class="col-2 avart">
          <q-avatar style="font-size: 38px;">
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
        </div>
          <div class="col-10">
            <div class="linear-nome2">
              <span>Max Leandro Silva<br /> <strong class="color-cinza">cod: 34454</strong></span>
              <span class="btn-bloq">Bloquear</span>
            </div>
          </div>
      </div>
      </div>

      <div class="box-seguid">
      <div class="row">
        <div class="col-2 avart">
          <q-avatar style="font-size: 38px;">
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
        </div>
          <div class="col-10">
            <div class="linear-nome2">
              <span>Max Leandro Silva<br /> <strong class="color-cinza">cod: 34454</strong></span>
              <span class="btn-bloq">Bloquear</span>
            </div>
          </div>
      </div>
      </div>

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
<style>
.box-seguid {
width: 100%;
  color: #676565;
  font-size: 12px;
  margin: 10px 0px;
}
.linear-nome2 {
display: flex;
justify-content: space-between;
  padding: 4px 15px 4px 0px;
 align-items: center;
}
.btn-bloq{
color: #5d5d5d;
    padding: 3px 11px;
    border: 1px solid #afafaf;
    border-radius: 6px;
}
.avart{
  display: flex;
  align-items: center;
}
</style>
