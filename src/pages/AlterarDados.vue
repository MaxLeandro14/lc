<template>
  <div>
  <q-toolbar style="background: rgb(251, 251, 251);">
<q-btn  @click="back" flat round dense icon="keyboard_backspace"/>
<q-toolbar-title class="primary-font" style="font-size: 16px;">
Alterar dados da conta
</q-toolbar-title>
</q-toolbar>

  <div class="q-gutter-y-md" style="max-width: 600px">

        <q-tabs
          v-model="tabDados"
          dense
          style="background: rgb(251, 251, 251);"
          active-color="green"
          indicator-color="green"
          align="justify"
        >
          <q-tab name="dados" label="Dados" />
          <q-tab name="infor" label="Acesso" />

        </q-tabs>

        <q-tab-panels v-model="tabDados" animated transition-prev="scale"
          transition-next="scale" style="background: #f8f8f8;">
          <q-tab-panel name="dados">

            <div>

                <q-input v-model="text" label="Nome de usuário" />

                <p style="margin: 23px 6px 0px;">Sexo:</p>
                <q-list>
                  <q-item tag="label" v-ripple>
                <q-radio v-model="sexo" val="Masculino" label="Masculino" color="teal" />
                </q-item>
                  <q-item tag="label" v-ripple>
                <q-radio v-model="sexo" val="Feminino" label="Feminino" color="orange" />
                </q-item>
                  <q-item tag="label" v-ripple>
                <q-radio v-model="sexo" val="Outro" label="Outro" color="red" />
                </q-item>
                </q-list>
                <q-select v-model="estado" :options="estados" label="Estado" />
                <q-btn style="margin: 40px 6px 0px;" color="green" class="full-width" label="Salvar" />

            </div>

          </q-tab-panel>

          <q-tab-panel name="infor">

             <div>

                <q-input v-model="text" label="Email" />
                <q-input v-model="text" label="Nova senha" />
                <q-input v-model="text" label="Repita senha" />
                <q-btn style="margin: 40px 6px 0px;" color="green" class="full-width" label="Atualizar" />

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
      sexo: null,
      tabDados: 'dados',
      estado: null,
      estados: [
        'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Sul', 'Rio Grande do Norte', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
      ]
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
.title-infor {
    color: rgb(86, 86, 86);
    font-size: 14px;
    padding: 8px 0px 9px 0px;
    border-radius: 7px;
}
</style>
