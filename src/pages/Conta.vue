<template>
  <div>
  <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
  <q-btn  @click="back" flat round dense icon="keyboard_backspace"/>
<q-toolbar-title class="primary-font" style="font-size: 16px;">
Conta
</q-toolbar-title>
  <!--<q-btn flat round dense icon="more_vert" style="color: #00d15a" />-->
</q-toolbar>
<div class="q-pa-md q-gutter-sm">

  <q-card class="my-card">
<q-card-section>

<p>Ao clicar em suspender, concordo que:</p>

    <q-list>
      <q-item v-ripple>
      <q-item-section avatar style="min-width: 40px; color: rgb(128, 128, 128);">
          <q-icon name="visibility_off" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Meu perfil ficará oculto para outros usuários;</q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
      <q-item-section avatar style="min-width: 40px; color: rgb(128, 128, 128);">
          <q-icon name="no_encryption" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Não poderei criar sala, assim como participar e interagir;</q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
      <q-item-section avatar style="min-width: 40px; color: rgb(128, 128, 128);">
          <q-icon name="no_cell" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Todas as funçoes ficarão desabilitadas até que seja ativada novamente;</q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
      <q-item-section avatar style="min-width: 40px; color: rgb(128, 128, 128);">
          <q-icon name="person_remove" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Meu perfil poderá ser excluido permanentimente após 90 dias;</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />
      <div class="row flex-center">
      <q-btn color="red" label="Suspender" @click="confirm = true"/>
      </div>

    </q-list>

</q-card-section>
</q-card>
<!-- -->
<q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Deseja realmente suspender?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Não" color="primary" v-close-popup />
          <q-btn flat label="Quero" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>
<!-- -->
</div>
</div>
</template>

<script >
export default {
  name: 'Error404',
  data () {
    return {
      confirm: false
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>
