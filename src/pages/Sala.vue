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

<q-form action="" method="post" @submit="onSubmit">
<div>

  <q-field color="green" label="Total de paginas: 370" stack-label>
  <q-input v-model="paginaAtual" :dense="dense" />
  </q-field>

  <q-btn flat round color="secondary" icon="exposure_neg_1" />
  <q-btn flat round color="secondary" icon="exposure_plus_1" />
  <q-btn flat round color="secondary" icon="exposure_plus_2" />

</div>

<p class="para-emoji">O que achou da leitura?</p>
<div class="row flex-center emoji-book ">

    <label>
      <input type="radio" name="emoji" value="feliz" checked>

      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M8.88,7.82L11,9.94L9.94,11L8.88,9.94L7.82,11L6.76,9.94L8.88,7.82M12,17.5C9.67,17.5 7.69,16.04 6.89,14H17.11C16.31,16.04 14.33,17.5 12,17.5M16.18,11L15.12,9.94L14.06,11L13,9.94L15.12,7.82L17.24,9.94L16.18,11Z" />
    </svg>

    </label>

     <label>
      <input type="radio" name="emoji" value="rindo">

      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M15.07 8.93V4.93A4.06 4.06 0 0 1 15.73 2.72A10 10 0 0 0 2.73 15.72A4.06 4.06 0 0 1 4.94 15.06H8.94V19.06A4.06 4.06 0 0 1 8.28 21.27A10 10 0 0 0 21.28 8.27A4.06 4.06 0 0 1 19.07 8.93M11 6H12.5V7.5H14V9H11M7.5 14V12.5H6V11H9V14M15.89 15.9A5.5 5.5 0 0 1 9.8 17L17 9.8A5.5 5.5 0 0 1 15.89 15.89M4.89 21.08A2 2 0 0 1 2.89 19.08A2 2 0 0 1 4.89 17.08H6.89V19.08A2 2 0 0 1 4.93 21.07M19.07 2.93A2 2 0 0 1 21.07 4.93A2 2 0 0 1 19.07 6.93H17.07V4.93A2 2 0 0 1 19.07 2.93Z" />
    </svg>

    </label>

    <label>
      <input type="radio" name="emoji" value="chorando">

      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M5.14,17.57C5.14,16.5 6.32,14.5 7.57,12.81C8.82,14.5 10,16.5 10,17.57A2.43,2.43 0 0,1 7.57,20C6.23,20 5.14,18.91 5.14,17.57M22,12A10,10 0 0,1 12,22C11.08,22 10.18,21.86 9.33,21.63C10.9,20.95 12,19.39 12,17.57C12,17.12 11.89,16.6 11.69,16C11.79,16 11.89,16 12,16C13.25,16 14.32,16.5 14.77,17.23L16.19,15.81C15.29,14.72 13.75,14 12,14C11.59,14 11.19,14.04 10.81,14.12C10.38,13.36 9.85,12.53 9.19,11.63L8.71,11C9.42,10.87 10,10.23 10,9.5C10,8.7 9.3,8 8.5,8C7.7,8 7,8.7 7,9.5C7,9.69 7.04,9.87 7.11,10.04L5.96,11.63C4.4,13.75 3.5,15.5 3.23,16.81C2.45,15.38 2,13.74 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M17,9.5C17,8.7 16.3,8 15.5,8C14.7,8 14,8.7 14,9.5C14,10.3 14.7,11 15.5,11C16.3,11 17,10.3 17,9.5Z" />
    </svg>

    </label>

    <label>
      <input type="radio" name="emoji" value="irrelevante">

      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2M8.5 8A1.5 1.5 0 1 1 7 9.5A1.54 1.54 0 0 1 8.5 8M17 16H13A4 4 0 0 0 9.53 18L7.8 17A6 6 0 0 1 13 14H17M15.5 11A1.5 1.5 0 1 1 17 9.5A1.54 1.54 0 0 1 15.5 11Z" />
    </svg>

    </label>

      <label>
      <input type="radio" name="emoji" value="raiva">

    <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,9.5V8L10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5M14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5L17,8V9.5Z" />
    </svg>

    </label>

</div>

<q-btn style="color: rgb(255, 255, 255); background: #4caf50; margin-top: 20px;" class="full-width" label="Salvar" type="submit" />

</q-form>

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
                :columns="$screens({ default: 1, md: 2, xl: 3 })"
                :attributes="attributes"
                :min-date='new Date(2018, 0, 1)'
                :max-date='new Date(2018, 0, 15)'
              />
             </div>
          </q-card-section>

        </q-card>
      </q-dialog>
    <!-- -->

    <div class="q-pa-md q-gutter-sm">

      <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
        <q-card style="background: #eaeaea; color: rgb(101, 101, 101); width: 300px">
          <q-card-section>
            <div style="font-size: 16px;">Início:</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div style="margin-top: -11px; font-size: 16px;"><q-icon name="sensor_door" /><strong>18/07/2020</strong></div>
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn :to="{ name: 'salaParticipando' }" flat label="Voltar" icon="keyboard_backspace" />
          </q-card-actions>
        </q-card>
      </q-dialog>

    </div>
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
      persistent: false,
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
          popover: {
            label: '2222',
            visibility: 'click'
          },
          dates: [new Date(2018, 0, 1), new Date(2018, 0, 10), new Date(2018, 0, 22)]
        },
        {
          bar: 'green',
          dates: [new Date(2018, 0, 4), new Date(2018, 0, 10), new Date(2018, 0, 15)]
        }
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
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
.emoji-book svg{
  width: 36px;
  height: 36px;
  color: #38a169;
  margin: 7px 6px;
}
.emoji-book input[type="radio"] {
  visibility: hidden;
  display: none;
}
.emoji-book input[type="radio"]:checked+svg {
  color: #9c27b0;
}
.para-emoji {
  text-align: left;
  margin: 20px 0px 5px 0px;
  color: #757373;
  font-size: 16px;
}
</style>
