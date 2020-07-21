<template>
  <div>
    <Header />
    <div class="q-pa-md q-gutter-sm">
      <div class="row">
        <q-input bg-color="white" style="width: 100%; margin: 0px auto 20px auto; font-family: poppins; color: #d8d8d8;" rounded filled  v-model="text" label="Pesquise por livro...">
          <template v-slot:append>
            <q-icon name="search" style="color: #ed5c7d;"/>
          </template>
        </q-input>
      </div>
      <div class="row flex-center justify-between">
        <p class="traco">Salas disponíveis</p>
        <router-link :to="{ name: 'todasSalas'}" >
          <p class="todas">Ver todas <q-icon name="forward" /></p>
        </router-link>
      </div>
      <div class="row">
        <div class="slide">
          <div class="bloco">
            <router-link :to="{ name: 'infoSala'}" >
              <img src="~assets/remove/ebook.jpg">
            </router-link>
            <router-link :to="{ name: 'perfil'}" >
              <p><span class="color-cinza">Por</span> Max Silva</p>
            </router-link>
          </div>

          <div class="bloco">
            <img src="~assets/remove/ebook.jpg">
            <p><span class="color-cinza">Por</span> Max Leandro Silva</p>
          </div>

          <div class="bloco">
            <img src="~assets/remove/ebook.jpg">
            <p><span class="color-cinza">Por</span> Editora GloboSat INC</p>
          </div>

          <div class="bloco">
            <img src="~assets/remove/ebook.jpg">
            <p><span class="color-cinza">Por</span> Editora Rocco</p>
          </div>

          <div class="bloco">
            <img src="~assets/remove/ebook.jpg">
            <p><span class="color-cinza">Por</span> Editora Rocco</p>
          </div>

          <div class="bloco">
            <img src="~assets/remove/ebook.jpg">
            <p><span class="color-cinza">Por</span> Editora Rocco</p>
          </div>

          <div class="bloco">
            <img src="~assets/remove/ebook.jpg">
            <p><span class="color-cinza">Por</span> Editora Rocco</p>
          </div>

        </div>
      </div>
    </div>

    <div class="q-pa-md q-gutter-sm">
      <span class="enter-cod" @click="codSala = true">Entrar com codigo</span>
    </div>

    <!-- -->
    <q-dialog v-model="codSala" seamless position="bottom">
      <q-card style="width: 100%; height: 40vh;">
        <q-card-section class="row items-center no-wrap">

            <div class="col-12">

              <q-field outlined hint="Codigo da sala" dense="dense" readonly>

                <template v-slot:control>
                  <div class="self-center full-width no-outline">
                    <q-input color="green" bg-color="white" filled v-model="codSalaText" />
                  </div>
                </template>

                <template v-slot:append>
                  <q-btn round dense flat icon="send" style="color: #00ca57; margin-top: 7px;" />
                </template>

                <template v-slot:after>
                  <q-btn flat round icon="close" v-close-popup style="color: rgb(212, 98, 75); margin-top: 5px;" />
                </template>

              </q-field>

          </div>

        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- -->

  </div>
</template>
<script>
import Header from 'layouts/HeaderMain.vue'
export default {
  components: {
    Header
  },
  name: 'PageIndex',
  data () {
    return {
      text: '',
      codSala: false,
      codSalaText: ''
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style>
.traco{
  font-family: 'segoi';
  font-size: 17px;
  color: #5d5a5a;
  float: left;
  padding: 4px 0px;
}
.traco::before{
  content: '';
  display: block;
  background: #ed5c7d;
  height: 22px;
  width: 3px;
  float: left;
  margin-right: 5px;
}
.todas{
  float: right;
  color: #ec407a ;
  font-size: 15px;
  padding: 4px 0px;
}
.slide{
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: scroll;
}
.slide img {
  max-width: 90px;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.1);
  margin: 0 4px;
  overflow: hidden;
}
.color-cinza{
  color: #9b9b9b;
}
.bloco{
  text-align: center;
}
.bloco p {
  font-size: 13px;
  color: #5b5b5b;
  padding: 6px 0px;
}
.enter-cod{
  background: #00ca57;
  color: #fff;
  padding: 20px 19px;
  border-radius: 16px;
  font-size: 16px;
  display: block;
  width: 100%;
  margin-bottom: 62px;
  position: relative;
}
.enter-cod::after{
  content: '';
  background: url('~assets/jovens-lendo.svg') no-repeat;
  height: 79px;
  width: 102px;
  right: 2px;
  top: -6px;
  position: absolute;
}
</style>
