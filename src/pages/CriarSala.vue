<template>
  <div>
    <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
      <q-btn  @click="back" flat round dense icon="keyboard_backspace"/>
    <q-toolbar-title class="primary-font" style="font-size: 16px;">
    Nova sala
    </q-toolbar-title>
    </q-toolbar>

      <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      contracted
      color="positive"
      animated
    >
      <q-step
        :name="1"
        title="Select campaign settings"
        icon="settings"
        :done="step > 1"
      >
        <!---->
          <q-input
            filled
            v-model="nomeLivro"
            label="Nome do livro *"
            style="margin-bottom: 7px;"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor insira o nome']"
          />

          <q-input
            filled
            type="number"
            v-model="totalPagina"
            label="Total páginas *"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Por favor insira o total de páginas',
              val => val > 0 && val < 100 || 'Por favor informe um numero real'
            ]"
          />
        <!-- -->
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="date_range"
        :done="step > 2"
      >
      <!---->
      <div>
      <p class="title-data">Informe a data de <strong class="date-blue">início</strong> e <strong class="date-blue">fim</strong> da sala</p>
          <div class="row">
            <DatePicker
          :columns="$screens({ lg: 2 }, 1)"
          mode='range'
          v-model='range'
          is-inline
          />
          </div>

        </div>
      <!---->
      </q-step>

         <q-step
        :name="3"
        title="Create an ad group"
        caption="Optional"
        icon="question_answer"
        :done="step > 3"
      >
      <!---->
      <div>

        <p class="title-data">Informe os dias de <strong class="date-red">debate</strong></p>
        <div class="row">
          <DatePicker
          :columns="$screens({ lg: 2 }, 1)"
          v-model="debates"
          mode="multiple"
          color="red"
          is-inline
          />
        </div>
        </div>
      <!---->
      </q-step>

      <q-step
        :name="4"
        title="Create an ad"
        icon="add_photo_alternate"
      >
        <!-- -->
        <p class="title-data" style="margin: 19px 0px 13px 0px;">Imagem de <strong class="date-blue">capa</strong></p>

        <q-file clearable color="accent" outlined bottom-slots v-model="arquivo" label="Subir imagem" counter>
        <template v-slot:append>
          <q-icon name="cloud_upload" color="accent" />
        </template>

        <template v-slot:hint>
          Mínimo de 200 X 200
        </template>
      </q-file>
      <p class="btn-buscar" @click="dialog2 = true" >
        <q-icon name="cloud_download" size="xs" /><br />
        Caso não tenha imagem, clique aqui e escolha uma online
      </p>
        <!-- -->
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Criar sala' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Voltar" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>

  <!-- -->
    <q-dialog
        v-model="dialog2"
        persistent
        :maximized="maximizedToggle2"
        transition-show="slide-up"
        transition-hide="slide-down"
      >

        <q-card class="text-white" style="background: #f8f8f8;">
          <q-bar>
            <q-space ></q-space>

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>

            <q-input bg-color="white" style="width: 100%; margin: 0px auto 20px auto; font-family: poppins; color: rgb(92, 237, 96);" rounded filled  v-model="search" label="Nome do livro...">
              <template v-slot:append>
                <q-icon name="search" style="color: rgb(69, 202, 53);" @click="buscar()"/>
              </template>
           </q-input>

          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row">
              <div class="col-12" v-for="(item, index) in result" :key="index">

                      <div class="box-p">
                        <img v-if="typeof item.volumeInfo.imageLinks  !== 'undefined'" :src="item.volumeInfo.imageLinks.thumbnail" alt="">

                     </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
  <!-- -->

</div>
</template>

<script >
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import axios from 'axios'
export default {
  name: 'Error404',
  components: {
    DatePicker
  },
  data () {
    return {
      step: 1,
      nomeLivro: null,
      totalPagina: null,
      debates: null,
      range: {
        start: null,
        end: null
      },
      search: '',
      result: '',
      arquivo: null,
      dialog2: false,
      maximizedToggle2: true
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    buscar: function () {
      var vm = this
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.search)
        .then(function (response) {
          vm.result = ''
          vm.result = response.data.items
          // console.log(vm.result)
        })
        .finally(function () {
        // always executed
        })
    }
  }
}
</script>
<style>
.title-data{
  color: rgb(86, 86, 86);
  font-size: 16px;
  background: #fbfbfb;
  padding: 8px 3px 20px 7px;
  border-radius: 7px;
}
.date-blue {
  color: #1976d2;
}
.date-red{
  color: #e53e3e;
}
.date-blue{
  color: #9c27b0;
}
.btn-buscar{
  padding: 15px 5px;
  margin: 40px 0px 5px 0px;
  color: #5a5a5a;
  background: #fbfbfb;
  border-radius: 13px;
  border: 1px solid #efeded;
  text-align: center;
}
.box-p {
  text-align: center;
  margin: 11px 0px;
}
.box-p img{
  max-width: 90px;
}
</style>
