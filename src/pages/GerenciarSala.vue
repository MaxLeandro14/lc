<template>
  <div>
    <q-toolbar style="background: rgb(251, 251, 251);">
      <q-btn  @click="back" flat round dense icon="keyboard_backspace"/>
    <q-toolbar-title class="primary-font" style="font-size: 16px;">
    Gerenciar <strong>O inimigo</strong>
    </q-toolbar-title>
    </q-toolbar>

      <div class="q-gutter-y-md" style="max-width: 600px">

        <q-tabs
          v-model="tabbDados"
          dense
          style="background: rgb(251, 251, 251);"
          active-color="green"
          indicator-color="green"
          align="justify"
        >
          <q-tab name="dados" label="Dados" />
          <q-tab name="atividade" label="Atividade" />

        </q-tabs>

        <q-tab-panels v-model="tabbDados" animated transition-prev="scale"
          transition-next="scale" style="background: #f8f8f8;">
          <q-tab-panel name="dados">

            <div>
              <!-- -->
              <!-- -->
            </div>

          </q-tab-panel>

          <q-tab-panel name="Atividade">

             <div>
              <!-- -->
              <!-- -->
            </div>

          </q-tab-panel>

        </q-tab-panels>

    </div>

</div>
</template>

<script >
export default {
  name: 'Error404',
  data () {
    return {
      tabbDados: 'dados'
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>
<style>
</style>
