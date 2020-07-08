<template>
  <div>
  <div class="fixed-top" style="z-index: 30;">

  <q-toolbar style="background: rgb(96, 128, 100); color: #fff">
  <q-btn :to="{ name: 'salaParticipando' }" flat round dense icon="keyboard_backspace"/>
  <q-toolbar-title class="primary-font" style="font-size: 16px;">
    O inimigo
  </q-toolbar-title>
  <q-btn flat round dense icon="more_vert" style="color: #fff">

    <q-menu
      transition-show="jump-down"
      transition-hide="jump-up"
    >
    <q-list style="min-width: 100px">
      <q-item clickable>
          <q-item-section>Links e Downloads</q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section>Template</q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section>Histórico de Leitura</q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section>Informações e Regras</q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section>Convidar</q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable>
        <q-item-section>Moderador</q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable>
        <q-item-section>Sair da Sala</q-item-section>
      </q-item>

    </q-list>
    </q-menu>
  </q-btn>
</q-toolbar>

  <q-tabs
    v-model="tabSala"
    dense
    no-caps
    style="background: rgb(96, 128, 100); color: #fff;"
  >
    <q-route-tab name="leitura" label="Leitura" to="/room" />
    <q-route-tab name="registro" label="Registro" to="/registro" />
    <q-route-tab name="atividade" label="Atividade" to="/atividade" />
  </q-tabs>

</div>
  <q-layout style="margin-top: 90px;">
      <q-page-container>
            <router-view />
      </q-page-container>
  </q-layout>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      tabSala: 'leitura'
    }
  }
}
</script>
<style>
.img-menu{
  width: 30px
}
</style>
