<template>
  <div>
  <div class="fixed-top" style="z-index: 30;">

  <q-toolbar style="background: rgb(251, 251, 251); color: #000">
  <q-btn :to="{ name: 'salaParticipando' }" flat round dense icon="keyboard_backspace"/>
  <q-toolbar-title class="primary-font" style="font-size: 16px;">
    O inimigo
  </q-toolbar-title>
  <q-btn flat round dense icon="more_vert" style="color: rgb(0, 209, 90);">

    <q-menu
      transition-show="jump-down"
      transition-hide="jump-up"
    >
    <q-list style="min-width: 140px">
      <q-item clickable>
          <q-item-section>
          <router-link :to="{ name: 'links'}" >
            Links e Downloads
          </router-link>
          </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section>
        <router-link :to="{ name: 'inforRegras'}" >
          Informações e Regras
        </router-link>
      </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section>Convidar</q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable>
        <q-item-section>
          <router-link :to="{ name: 'gerenciarSala'}" >
            Moderador
          </router-link>
        </q-item-section>
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
    indicator-color="green"
    style="background: rgb(251, 251, 251); color: rgb(95, 94, 94);"
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
