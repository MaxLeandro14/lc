<template>
  <div>
    <Header />
    <div class="q-pa-md q-gutter-sm">
      <div class="row flex-center">
        <div class="info-center" style="margin: 0px auto 20px auto; font-family: poppins; text-align: center;">
          <img src="~assets/remove/ebook.jpg"><br>
          <p class="title-infor-sala">Inimigo Mortal</p>
          <p class="sub-infor-sala"><span class="color-cinza">Por</span> Eva Ribeiro monteiro Lobato</p>
        </div>
      </div>
      <div class="row flex-center">
        <q-card style="background: #f8f8f8">
         <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                no-caps
                active-color="pink"
                indicator-color="pink"
                align="justify"
                narrow-indicator
              >

                <q-tab name="infor" label="Informações" />
                <q-tab name="regras" label="Cronograma" />
          </q-tabs>

          <q-separator />

            <q-tab-panels v-model="tab" animated>

              <q-tab-panel name="infor">
                <span @click="expandir = !expandir" :class="(!expandir)?'block-with-text':'' ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </q-tab-panel>

              <q-tab-panel name="regras">
                <span>
                  <div class="regras2">
                    <p class="pri-bar">Leitura</p>
                    <p class="seg-bar">Debate</p>
                  </div>

                  <Calendar
                    :columns="$screens({ lg: 2 }, 1)"
                    :attributes="attributes"
                    :min-date='new Date(2018, 0, 1)'
                    :max-date='new Date(2018, 0, 15)'
                    />

                </span>
              </q-tab-panel>

            </q-tab-panels>
         </q-card>
      </div>
      <div class="row">
          <q-checkbox v-model="concordo" label="Concordo com as informações" />
      </div>

      <div class="row flex-center">
        <q-btn @click="participar" style="background: #00ca57; color: #fff; width: 80%; margin: 10px 0px;" icon-right="send" label="Participar" />
      </div>

      <div class="row">
        <div style="display: flex; justify-content: space-between; align-items: center; border: 1px solid #00ca57; padding: 5px; border-radius: 10px; width: 100%; margin-bottom: 60px;">
          <div>Inscritos</div>
          <div style="display: flex; align-items: center;">
            <div>
              <q-avatar size="md">
                <img src="~assets/remove/Max.jpg">
              </q-avatar>
              <q-avatar size="md">
                <img src="~assets/remove/Max.jpg">
              </q-avatar>
              <q-avatar size="md">
                <img src="~assets/remove/Max.jpg">
              </q-avatar>
            </div>
            <div style="margin-left: 3px;">
              +500
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import Header from 'layouts/HeaderMain.vue'
import Calendar from 'v-calendar/lib/components/calendar.umd'
export default {
  name: 'InforSala',
  components: {
    Header, Calendar
  },
  data () {
    return {
      tab: 'infor',
      concordo: false,
      expandir: false,
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
  },
  methods: {
    participar: function () {
      this.$router.push({ name: 'room', params: { roomId: '123' } })
      // this.$router.push('/logado/logad')
    }
  }
}
</script>
<style>
.info-center img {
  max-width: 100px;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.1);
}
.title-infor-sala{
  font-size: 22px;
  margin: 7px 0 5px 0px;
}
.sub-infor-sala{
  font-size: 16px;
}
.color-cinza{
  color: #9b9b9b;
}
.margin-menu-button{
  margin-bottom: 20px;
}
.block-with-text {
  overflow: hidden;
  position: relative;
  max-height: 7em;
  display: block;
}
.block-with-text:before {
  content: '...';
  position: absolute;
  display: block;
  background: #ffffffe0;
  text-align: center;
  bottom: 0;
  width: 100%;
  font-size: 18px;
}
.regras2 {
  padding: 3px 12px;
  margin-bottom: 7px;
}
.regras2 p {
  color: #888888;
  margin: 0;
  font-family: poppins;
  font-size: 13px;
}
.pri-bar::after{
  content: '';
  display: block;
  height: 4px;
  width: 15px;
  background: #38a169;
  float: left;
  margin-right: 7px;
  margin-top: 6px;
}
.seg-bar::after{
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
