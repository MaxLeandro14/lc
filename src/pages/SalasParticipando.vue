<template>
<div>
<div class="row">

<q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
  <q-toolbar-title class="primary-font" style="font-size: 16px;">
  Salas de leitura
  </q-toolbar-title>
  <!--<q-btn flat round dense icon="more_vert" style="color: #00d15a" />-->
</q-toolbar>

</div>

<div style="margin-top: 19px"></div>

<q-btn-toggle
        v-model="busca"
        spread
        no-caps
        style="border-radius: 0px"
        toggle-color="green-5"
        color="white"
        text-color="black"
        :options="[
          {label: 'Em andamento', value: 'one'},
          {label: 'Fechada', value: 'two'}
        ]"
      />

<div style="margin-top: 14px"></div>
<div class="q-pa-md q-gutter-sm">
<div class="row">

        <div class="col-6 bloco2 " style="text-align: center">
           <router-link :to="{ name: 'room'}" >
            <img src="~assets/remove/ebook.jpg">
          </router-link>
          <router-link :to="{ name: 'perfil'}" class="flex-center">
            <p><span class="color-cinza">Por</span> Max Silva</p>
          </router-link>
        </div>

        <div class="col-6 bloco2" style="text-align: center">
          <router-link :to="{ name: 'room'}" >
            <img src="~assets/remove/ebook.jpg">
          </router-link>
          <router-link :to="{ name: 'perfil'}" >
            <p><span class="color-cinza">Por</span> Max Silva</p>
          </router-link>
        </div>

        <div class="col-6 bloco2" style="text-align: center">
          <router-link :to="{ name: 'room'}" >
            <img src="https://www.decorfacil.com/wp-content/uploads/2017/10/20171028casa-grande-48.jpg">
          </router-link>
          <router-link :to="{ name: 'perfil'}" >
            <p><span class="color-cinza">Por</span> Max Silva</p>
          </router-link>
        </div>

         <div class="col-6 bloco2" style="text-align: center">
          <router-link :to="{ name: 'room'}" >
            <img src="https://i.ytimg.com/vi/BzmJmJv4L-E/maxresdefault.jpg">
          </router-link>
          <router-link :to="{ name: 'perfil'}" >
            <p><span class="color-cinza">Por</span> Max Silva</p>
          </router-link>
        </div>

    </div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      busca: 'one'
    }
  }
}
</script>
<style>
.bio{
  padding: 18px 9px;
}
.img-menu{
  width: 30px
}
p {
  margin: 0;
  padding: 0;
}
.btn-seguir{
  width: 100px;
  font-size: 11px;
  text-transform: capitalize;
  background: #00d15a;
  border: none;
  color: #fff;
  border-radius: 5px;
}
.bloco2 img {
  max-width: 95px;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.1);
  margin: 4px;
  max-height: 141px;
}
.color-cinza{
  color: #9b9b9b;
}
.bloco2 p {
  font-size: 12px;
  color: #5b5b5b;
  margin-bottom: 15px;
}
</style>
