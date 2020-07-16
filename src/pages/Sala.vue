<template>
  <div>
    <div class="q-pa-md" style="max-width: 350px">
    <q-list padding bordered class="rounded-borders">

      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        icon="drafts"
        label="Publicação fixada"
        header-class="text-purple"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
    <div class="row  flex-center">

      <div class="col text-center">
        <q-knob
          show-value
          readonly
          font-size="12px"
          v-model="value"
          size="60px"
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

    <q-btn :to="{ name: 'anotacao' }" color="white" no-caps text-color="pink-5" label="Anotações">
      <q-badge color="orange" floating>22</q-badge>
    </q-btn>

  <q-btn color="white" no-caps text-color="pink-5" label="Cronograma" @click="cronograma = true" />

</div>

<div class="q-pa-md row items-center q-gutter-md">

<q-card class="my-card" style="width: 100%; text-align: center;">
<q-card-section>

<p style="font-size: 17px; color: #4caf50;"><strong>Registrar Leitura</strong></p>
<div>

<q-field color="green" label="Total de paginas: 370" stack-label>
<q-input v-model="paginaAtual" :dense="dense" />
</q-field>

<q-btn flat round color="secondary" icon="exposure_neg_1" />
<q-btn flat round color="secondary" icon="exposure_plus_1" />
<q-btn flat round color="secondary" icon="exposure_plus_2" />

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

    <!-- -->
    <q-dialog
        v-model="cronograma"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card style="background: rgb(249, 248, 248);">
          <q-bar>
            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Fechar</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div class="cronog2">
              <p class="pri-bar2">Leitura</p>
              <p class="seg-bar2">Debate</p>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
             <div class="row flex-center">
               <Calendar
                :columns="$screens({ lg: 2 }, 1)"
                :attributes="attributes"
                :min-date='new Date(2018, 0, 1)'
                :max-date='new Date(2018, 0, 15)'
              />
             </div>
          </q-card-section>

        </q-card>
      </q-dialog>
    <!-- -->

  </div>
</template>

<script >
import Calendar from 'v-calendar/lib/components/calendar.umd'
export default {
  name: 'MainLayout',
  components: {
    Calendar
  },
  data () {
    return {
      value: 81,
      fab2: false,
      dense: false,
      paginaAtual: 224,
      cronograma: false,
      maximizedToggle: true,
      attributes: [
        {
          bar: {
            color: 'red',
            class: 'my-dot-class'
          },
          dates: [new Date(2018, 0, 1), new Date(2018, 0, 10), new Date(2018, 0, 22)]
        },
        {
          bar: 'green',
          dates: [new Date(2018, 0, 4), new Date(2018, 0, 10), new Date(2018, 0, 15)]
        }
      ]
    }
  }
}
</script>
<style>
.concluid{
  color: #8e8e8e;
  margin-top: -11px;
}
.cronog2 {
  padding: 3px 12px;
  margin-bottom: 7px;
}
.cronog2 p {
  color: #888888;
  margin: 0;
  font-family: poppins;
  font-size: 14px;
}
.pri-bar2::after{
  content: '';
  display: block;
  height: 4px;
  width: 15px;
  background: #38a169;
  float: left;
  margin-right: 7px;
  margin-top: 6px;
}
.seg-bar2::after{
  content: '';
  display: block;
  height: 4px;
  width: 15px;
  background: #e53e3e;
  float: left;
  margin-right: 7px;
  margin-top: 6px;
}
</style>
