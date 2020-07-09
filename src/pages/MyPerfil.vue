<template>
<div>
<div class="row">

      <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
<q-toolbar-title class="primary-font" style="font-size: 16px;">
Max Leandro Silva
</q-toolbar-title>
<q-btn flat round dense icon="more_vert" style="color: #00d15a">
    <q-menu
      transition-show="jump-down"
      transition-hide="jump-up"
    >
    <q-list style="min-width: 100px">

      <q-item clickable v-ripple>
        <q-item-section avatar style="min-width: 40px; color: rgb(171, 168, 168);">
          <q-icon name="account_circle" />
        </q-item-section>

        <q-item-section>
          Contato
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar style="min-width: 40px; color: rgb(0, 209, 90);">
          <q-icon name="share" />
        </q-item-section>

        <q-item-section>
          Compartilhar
        </q-item-section>
      </q-item>

    </q-list>
    </q-menu>
</q-btn>
</q-toolbar>

</div>

<div style="margin-top: 19px"></div>

<div class="row flex-center">

<div class="col" style="text-align: center">

<q-avatar size="72px" >
<img src="~assets/remove/Max.jpg" style="border: 4px solid #fff; margin-bottom: 12px;">
<q-badge floating lign="bottom" style="bottom: 3px; top: 45px; !important; border-radius: 50%; color: rgb(255, 255, 255); background: #00ca57;">+</q-badge>

</q-avatar>
<p><q-icon name="star_rate
" /> 4.4</p>
</div>

<div class="col" style="text-align: left">
<!--
<p class="primary-font ext-subtitle1">Seguidores: <span class="text-bold">221</span></p>

<p class="primary-font ext-subtitle1">Seguindo: <span class="text-bold">221</span></p>
-->
<p class="primary-font ext-subtitle1"><span style="color: #999999">Codigo: 221</span></p>
<p><button class="btn-editar">Editar</button></p>

</div>

</div>

<div class="row">
<p class="bio">sssasadsfdsfssdgcdsfs daff fsdfsdga fgghga gdfhhah hgshsfhh</p>
</div>

<q-btn-toggle
        v-model="busca"
        spread
        no-caps
        style="border-radius: 0px"
        toggle-color="green-6"
        color="white"
        text-color="black"
        :options="[
          {label: 'Atual', value: 'one'},
          {label: 'Fechado', value: 'two'}
        ]"
      />

<div style="margin-top: 14px"></div>
<div class="q-pa-md q-gutter-sm">
<div class="row">

        <div class="col-4 bloco2" style="text-align: center">
          <img src="~assets/remove/ebook.jpg">
        </div>

        <div class="col-4 bloco2" style="text-align: center">
          <img src="~assets/remove/ebook.jpg">
        </div>

        <div class="col-4 bloco2" style="text-align: center">
          <img src="~assets/remove/ebook.jpg">
        </div>

         <div class="col-4 bloco2" style="text-align: center">
          <img src="~assets/remove/ebook.jpg">
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
  padding: 18px 9px 26px 9px;
}
.img-menu{
  width: 30px
}
p {
  margin: 0;
  padding: 0;
}
.btn-editar{
  width: 115px;
  font-size: 11px;
  text-transform: capitalize;
  border: 1px solid #00d15a;
  background: #fff;
  border-radius: 5px;
  margin: 6px 0;
}
.bloco2 img {
  max-width: 74px;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.1);
  margin: 4px;
}

</style>
