<template>
  <div>
    <div class="row  flex-center">

      <div class="col text-center">
        <q-knob
          show-value
          font-size="12px"
          v-model="value"
          size="50px"
          :thickness="0.22"
          color="green"
          track-color="grey-3"
          class="q-ma-md"
          >
                  {{ value }}%
         </q-knob>
           <p class="concluid">Concluido</p>
        </div>

    </div>
<div class="q-pa-md row flex-center items-center q-gutter-md">
  <q-btn color="white" no-caps text-color="pink-5" label="Anotações">
    <q-badge color="orange" floating>22</q-badge>
  </q-btn>

  <q-btn color="white" no-caps text-color="pink-5" label="Cronograma" />

</div>
<div class="q-pa-md row items-center q-gutter-md">

<q-card class="my-card" style="width: 100%; text-align: center;">
<q-card-section>

<p style="font-size: 17px; color: #4caf50;"><strong>Registrar Leitura</strong></p>
<div>

<q-field color="green" label="Total de paginas: 370" stack-label>
<q-input v-model="paginaAtual" :dense="dense" />
</q-field>

<q-btn flat round color="secondary" icon="exposure_plus_2" />
<q-btn flat round color="secondary" icon="exposure_neg_1" />

</div>

<q-btn style="color: rgb(255, 255, 255); background: #4caf50;" class="full-width" label="Salvar" />

</q-card-section>
</q-card>
<!--
<q-page-sticky position="bottom-right">
  <q-btn padding="sm" fab icon="play_arrow" color="accent" style="margin-right: 10px; margin-bottom: 5px;" />
</q-page-sticky>
-->
</div>

  </div>
</template>

<script >
export default {
  name: 'MainLayout',
  data () {
    return {
      value: 81,
      fab2: false,
      dense: false,
      paginaAtual: 224

    }
  }
}
</script>
<style>
.concluid{
  color: #8e8e8e;
  margin-top: -11px;
}
</style>
