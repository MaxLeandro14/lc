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

<div class="row emoji-book flex-center">

  <div class="row">

    <label>
      <input type="radio" name="emoji" value="feliz" checked>

      <svg enable-background="new 0 0 30 30" version="1.1" viewBox="0 0 30 30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <circle class="st0" cx="15" cy="15.2" r="14"/>
        <path class="st1" d="m5.6 16.5c0.5 4.7 4.5 8.4 9.4 8.4s8.9-3.7 9.4-8.4h-18.8z"/>
        <path class="st2" d="m8.5 22.3c1.7 1.6 4 2.6 6.5 2.6 2.4 0 4.6-0.9 6.3-2.4l-0.1-0.2c-6.3-3.1-12.6-0.1-12.7 0z"/>
            <path class="st3" d="m7.5 14c-0.2 0-0.4-0.1-0.5-0.2-0.2-0.3-0.2-0.6 0.1-0.8l2-1.6-2.1-1.2c-0.2-0.2-0.3-0.6-0.1-0.9 0.1-0.2 0.5-0.3 0.8-0.2l2.8 1.7c0.2 0.1 0.3 0.3 0.3 0.5s-0.1 0.4-0.2 0.5l-2.7 2.1c-0.1 0.1-0.3 0.1-0.4 0.1z"/>
            <path class="st3" d="m22.6 14c-0.1 0-0.3 0-0.4-0.1l-2.7-2.1c-0.2-0.1-0.2-0.3-0.2-0.5s0.1-0.4 0.3-0.5l2.8-1.7c0.3-0.2 0.6-0.1 0.8 0.2s0.1 0.6-0.2 0.8l-2.1 1.2 2 1.6c0.3 0.2 0.3 0.6 0.1 0.8-0.1 0.2-0.2 0.3-0.4 0.3z"/>
      </svg>

    </label>

     <label>
      <input type="radio" name="emoji" value="amando" checked>

      <svg enable-background="new 0 0 30 30" version="1.1" viewBox="0 0 30 30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <circle class="st0" cx="15" cy="15" r="13.8"/>
        <path class="st0" d="M9.1,17.8c0.3,3,2.8,5.2,5.9,5.2c3,0,5.5-2.3,5.9-5.2H9.1z"/>
        <path class="st1" d="m10.9 21.5c1.1 1 2.5 1.6 4.1 1.6 1.5 0 2.9-0.6 3.9-1.5l-0.1-0.1c-3.9-2-7.8-0.1-7.9 0z"/>
        <path class="st1" d="m13.1 11c0-1.3-0.9-2.5-2.3-2.5-1.1 0-1.7 0.8-2 1.5-0.2-0.7-0.8-1.5-1.9-1.5-1.4 0-2.3 1.2-2.3 2.4 0 0.3 0 3.1 4.3 5.4 4.2-2.2 4.2-5 4.2-5.3z"/>
        <path class="st1" d="m25.5 11c0-1.3-0.9-2.5-2.3-2.5-1.1 0-1.7 0.8-2 1.5-0.2-0.7-0.9-1.5-2-1.5-1.4 0-2.3 1.2-2.3 2.4 0 0.3 0 3.1 4.3 5.4 4.3-2.2 4.3-5 4.3-5.3z"/>
      </svg>

    </label>

    <label>
      <input type="radio" name="emoji" value="chorando" checked>

      <svg enable-background="new 0 0 30 30" version="1.1" viewBox="0 0 30 30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <circle class="st0" cx="15.1" cy="15.3" r="13.8"/>
        <ellipse class="st0" cx="15.1" cy="18.6" rx="2.5" ry="4.2"/>
        <path class="st1" d="m17.2 20.8c-1.8-1-3.3-0.4-4.1 0.1 0.4 1.1 1.2 1.8 2 1.8 0.8 0.1 1.6-0.7 2.1-1.9z"/>
          <path class="st1" d="M10.8,15l-3.6,2l0.1,10c1.1,0.6,2.3,1.1,3.5,1.5V15z"/>
          <path class="st1" d="M19.3,15l3.6,2l-0.1,10c-1.1,0.6-2.3,1.1-3.5,1.5V15z"/>
            <path class="st1" d="m7.6 15.3c-0.2 0-0.3-0.1-0.5-0.2-0.1-0.3-0.1-0.7 0.2-0.9l2-1.5-2.1-1.2c-0.3-0.2-0.4-0.5-0.2-0.8s0.5-0.4 0.8-0.2l2.8 1.6c0.2 0.1 0.3 0.3 0.3 0.5s-0.1 0.4-0.2 0.5l-2.7 2c-0.1 0.1-0.3 0.2-0.4 0.2z"/>
            <path class="st1" d="m22.5 15.3c-0.1 0-0.3 0-0.4-0.1l-2.7-2.1c-0.2-0.1-0.2-0.3-0.2-0.5s0.1-0.4 0.3-0.5l2.8-1.6c0.3-0.2 0.6-0.1 0.8 0.2s0.1 0.6-0.2 0.8l-2.1 1.2 2 1.5c0.3 0.2 0.3 0.6 0.1 0.8-0.1 0.2-0.2 0.3-0.4 0.3z"/>
      </svg>

    </label>

    <label>
      <input type="radio" name="emoji" value="irrelevante" checked>

      <svg enable-background="new 0 0 30 30" version="1.1" viewBox="0 0 30 30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <circle class="st0" cx="15" cy="15" r="13.9"/>
        <circle class="st0" cx="8.8" cy="12.5" r="3.2"/>
        <path class="st1" d="m11 10.2c-0.6-0.6-1.4-0.9-2.2-0.9-0.6 0-1.1 0.2-1.6 0.4-0.1 0.2-0.2 0.3-0.2 0.4-0.1 0.7 0.8 1.3 1.9 1.4s2.1-0.3 2.1-1c0.1-0.1 0-0.2 0-0.3z"/>
          <circle class="st0" cx="21.2" cy="12.5" r="3.2"/>
          <path class="st1" d="m23.4 10.2c-0.6-0.6-1.4-0.9-2.2-0.9-0.6 0-1.1 0.2-1.6 0.4-0.1 0.1-0.2 0.3-0.2 0.4-0.1 0.7 0.8 1.3 1.9 1.4s2.1-0.3 2.1-1c0.1-0.1 0.1-0.2 0-0.3z"/>
        <path class="st1" d="m20.2 18.2c-0.7-0.7-1.6-1.1-2.6-1.4-1-0.2-2-0.2-3-0.1-1 0.2-1.9 0.6-2.7 1.1-0.9 0.6-1.6 1.3-2 2.1-0.1 0.1-0.1 0.3 0 0.4s0.1 0.1 0.2 0.1h0.1l0.3-0.2c0.7-0.4 1.4-0.7 2.1-1 0.8-0.3 1.6-0.5 2.3-0.7 0.8-0.2 1.6-0.2 2.4-0.2 0.7 0 1.5 0.1 2.5 0.3 0.1 0 0.3 0 0.3-0.2 0.2 0 0.2-0.1 0.1-0.2z"/>
      </svg>

    </label>

    <label>
      <input type="radio" name="emoji" value="surpreso" checked>
    <svg enable-background="new 0 0 30 30" version="1.1" viewBox="0 0 30 30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <circle class="st0" cx="15" cy="15.1" r="13.6"/>
      <ellipse class="st0" cx="15" cy="19.4" rx="3.6" ry="6.1"/>
      <path class="st1" d="m18.1 22.7c-2.6-1.4-4.8-0.6-6 0.2 0.7 1.6 1.7 2.7 3 2.7 1.2-0.1 2.3-1.2 3-2.9z"/>
          <ellipse class="st1" transform="matrix(.8977 .4405 -.4405 .8977 6.0927 -2.5698)" cx="8.6" cy="11.8" rx="3.3" ry="4.7"/>
          <ellipse class="st1" transform="matrix(-.8977 .4405 -.4405 -.8977 45.862 13.03)" cx="21.4" cy="11.8" rx="3.3" ry="4.7"/>
          <path class="st1" d="m22.6 7.8c-0.2 0-0.4-0.2-0.4-0.4v-5c0-0.2 0.2-0.4 0.4-0.4 0.3 0 0.4 0.2 0.4 0.4v5c0 0.2-0.1 0.4-0.4 0.4z"/>
          <path class="st1" d="m24.5 7c-0.2 0-0.4-0.2-0.4-0.4v-3.6c0-0.2 0.2-0.4 0.4-0.4s0.4 0.2 0.4 0.4v3.6c0 0.2-0.2 0.4-0.4 0.4z"/>
          <path class="st1" d="m26.4 9.6c-0.2 0-0.4-0.2-0.4-0.4v-5.3c0-0.2 0.2-0.4 0.4-0.4s0.4 0.2 0.4 0.4v5.4c0 0.2-0.2 0.3-0.4 0.3z"/>
    </svg>

    </label>

      <label>
      <input type="radio" name="emoji" value="raiva" checked>

    <svg enable-background="new 0 0 30 30" version="1.1" viewBox="0 0 30 30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <circle class="st0" cx="15" cy="15" r="13.9"/>
          <ellipse class="st1" cx="9.9" cy="12.4" rx="1" ry="1.7"/>
          <ellipse class="st1" cx="20.1" cy="12.4" rx="1" ry="1.7"/>
      <path class="st1" d="m20.7 21.2c0.4 0.3 0.9 0 0.7-0.5-1-2.6-3.5-4.4-6.5-4.4-2.9 0-5.3 1.7-6.4 4.2-0.1 0.5 0.5 0.9 0.8 0.5 2-1.9 6.4-4.7 11.4 0.2z"/>
        <rect class="st1" transform="matrix(.7071 -.7071 .7071 .7071 -3.1703 10.225)" x="10.1" y="6.7" width="1.3" height="4.4"/>
        <rect class="st1" transform="matrix(.7071 .7071 -.7071 .7071 11.957 -10.989)" x="18.6" y="6.7" width="1.3" height="4.4"/>
    </svg>

    </label>

          <label>
      <input type="radio" name="emoji" value="triste" checked>

<svg enable-background="new 0 0 25 25" version="1.1" viewBox="0 0 25 25" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
  <circle class="st0" cx="12.5" cy="12.5" r="11.1"/>
      <ellipse class="st1" cx="8.4" cy="9.8" rx=".8" ry="1.4"/>
      <ellipse class="st1" cx="16.6" cy="9.8" rx=".8" ry="1.4"/>
  <path class="st1" d="m19.1 7.5c-0.1 0-0.2-0.1-0.4-0.1-0.3-0.1-0.5-0.1-0.7-0.2-0.3-0.1-0.6-0.2-0.9-0.4s-0.6-0.3-0.8-0.6c-0.3-0.2-0.6-0.5-0.8-0.7h-0.1c0 0.4 0.2 0.8 0.4 1.1 0.2 0.4 0.5 0.6 0.9 0.8s0.7 0.3 1.1 0.3c0.5 0.1 0.9 0 1.3-0.2z"/>
  <path class="st1" d="m5.9 7.5c0.1 0 0.2-0.1 0.4-0.1 0.2-0.1 0.5-0.2 0.7-0.3 0.3-0.1 0.6-0.2 0.9-0.4s0.6-0.3 0.8-0.6c0.4-0.1 0.6-0.4 0.9-0.6h0.1c0 0.4-0.2 0.8-0.4 1.1-0.3 0.4-0.6 0.6-1 0.8s-0.8 0.3-1.2 0.4c-0.4 0-0.8-0.1-1.2-0.3z"/>
<path class="st1" d="m8.3 18.2c-0.1 0-0.2-0.1-0.2-0.2 0-0.5 0.1-1 0.4-1.5 0.2-0.5 0.6-0.9 1-1.2 0.8-0.7 1.9-1.1 3-1.1s2.2 0.4 3 1.1 1.4 1.8 1.4 2.7c0 0.1-0.1 0.3-0.2 0.2-0.1 0-0.2-0.2-0.3-0.2-0.1-0.1-0.2-0.2-0.4-0.3-0.3-0.2-0.5-0.3-0.8-0.5-1-0.5-2.1-0.8-3.3-0.7-0.7 0.1-1.4 0.3-2.1 0.6-0.4 0.2-0.8 0.4-1.1 0.7 0 0.1-0.2 0.3-0.4 0.4z"/>
</svg>

    </label>

  </div>

</div>

<q-btn style="color: rgb(255, 255, 255); background: #4caf50;" class="full-width" label="Salvar" type="submit" />

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
      persistent: true,
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
  width: 38px;
  margin: 3px -1px;
}
.emoji-book input[type="radio"] {
  visibility: hidden;
}
.emoji-book input[type="radio"]:checked+svg .st0 {
  fill: #5D6AE2;
  stroke: #5D6AE2;
}
.emoji-book input[type="radio"]:checked+svg .st1 {
  fill: #ffffff;
  stroke: #ffffff;
}
.emoji-book input[type="radio"]:checked+svg .st2 {
  fill: #5d6ae2;
  stroke: #ffffff;
}
.emoji-book input[type="radio"]:checked+svg .st3 {
  fill: #ffffff;
  stroke: #ffffff;
}
.emoji-book .st1 {
    fill: #ffffff;
    stroke: #5D6AE2;
    stroke-width:2;
}
path.st3 {
    fill: #5d6ae2;
    stroke: #5d6ae2;
}
.emoji-book  .st0{fill:#fff;stroke:#5D6AE2;stroke-width:2;stroke-miterlimit:10;}
</style>
