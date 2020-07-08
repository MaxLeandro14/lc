<template>
  <div>
    <Header />
    <div class="q-pa-md q-gutter-sm">
      <div class="row">
        <q-input bg-color="white" style="width: 100%; margin: 0px auto 20px auto; font-family: poppins; color: #d8d8d8;" rounded filled  v-model="text" label="Pesquise por livro...">
          <template v-slot:append style="font-size: 10px;">
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="row flex-center justify-between">
        <p class="traco">Salas em aberto</p>
        <p class="todas">Ver todas</p>
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

        </div>
      </div>
    </div>

    <div class="q-pa-md q-gutter-sm">
      <span class="enter-cod">Entrar com codigo</span>
    </div>

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
      text: ''
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
  font-size: 16px;
  float: left;
}
.traco::before{
  content: '';
  display: block;
  background: #00d15a;
  height: 19px;
  width: 3px;
  float: left;
  margin-right: 5px;
}
.todas{
  float: right;
  color: #ffa18e;
}
.slide{
  display: flex;
  justify-content: space-between;
  width: 100vw;
  overflow: hidden;
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
  font-size: 12px;
  color: #5b5b5b;
}
.enter-cod{
  background: #00ca57;
  color: #fff;
  padding: 14px 19px;
  border-radius: 16px;
  display: block;
  width: 100%;
  margin-bottom: 62px;
  position: relative;
}
.enter-cod::after{
  content: '';
  background: url('~assets/jovens-lendo.svg') no-repeat;
  height: 64px;
  width: 83px;
  right: 2px;
  top: -9px;
  position: absolute;
}
</style>
