<template>
  <div>
    <div class="row  flex-center">
      <div class="col text-center primary-font ext-subtitle1"><span class="text-bold">221<br></span>Participantes</div>
      <div class="col text-center">
        <q-knob
          show-value
          font-size="12px"
          v-model="value"
          size="50px"
          :thickness="0.22"
          color="teal"
          track-color="grey-3"
          class="q-ma-md"
          >
                  {{ value }}%
         </q-knob>
           <p>Concluido</p>
        </div>
        <div class="col text-center primary-font ext-subtitle1"><span class="text-bold">221<br></span>Moderadores</div>

    </div>
<div class="q-pa-md row flex-center items-center q-gutter-md">
  <q-btn color="white" no-caps text-color="primary" label="Anotações">
    <q-badge color="orange" floating>22</q-badge>
  </q-btn>

  <q-btn color="white" no-caps text-color="primary" label="Cronograma" />

</div>
<div class="q-pa-md row items-center q-gutter-md">

<q-card class="my-card" style="width: 100%; text-align: center;">
<q-card-section>

<p style="font-size: 17px">Registrar Leitura</p>
<div>

<q-field color="green" label="Total paginas: 370" stack-label>
<template v-slot:control>
<div class="self-center full-width no-outline" style="font-size: 19px; padding: 9px 0;" tabindex="0">220</div>
</template>
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
      fab2: false
    }
  }
}
</script>
