<template>
<div>
<div class="row">

  <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
  <q-btn @click="back" flat round dense icon="keyboard_backspace"/>
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

  <q-avatar size="72px" >
  <img src="~assets/remove/Max.jpg" style="border: 4px solid #fff; margin-bottom: 12px;">
  </q-avatar>

</div>
<div class="row flex-center">
   <p><q-icon name="star_rate
  " /> 4.4</p>
</div>
<div class="row flex-center">
  <button class="btn-seguir">Seguir</button>
</div>

<div class="row">
<p class="bio">sssasadsfdsfssdgcdsfs daff fsdfsdga fgghga gdfhhah hgshsfhh</p>
</div>

<q-btn-toggle
        v-model="busca"
        spread
        no-caps
        style="border-radius: 0px"
        toggle-color="grey-7"
        text-color="black"
        :options="[
          {label: 'Atual', value: 'one'},
          {label: 'Fechado', value: 'two'}
        ]"
      />

<div style="margin-top: 14px"></div>

<div class="row" style="margin-bottom: 20px;">

        <div class="col-4 bloco3" style="text-align: center">
          <img src="~assets/remove/ebook.jpg">
          <p><span class="color-cinza">Cod: </span>32344</p>
        </div>

        <div class="col-4 bloco3" style="text-align: center">
          <img src="~assets/remove/ebook.jpg">
          <p><span class="color-cinza">Cod: </span>32344</p>
        </div>

        <div class="col-4 bloco3" style="text-align: center">
          <img src="~assets/remove/ebook.jpg">
          <p><span class="color-cinza">Cod: </span>32344</p>
        </div>

         <div class="col-4 bloco3" style="text-align: center">
          <img src="~assets/remove/ebook.jpg">
          <p><span class="color-cinza">Cod: </span>32344</p>
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
  },
  methods: {
    back: function () {
      this.$router.go(-1)
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
.btn-seguir{
  width: 104px;
  font-size: 11px;
  text-transform: capitalize;
  background: #00d15a;
  padding: 3px;
  border: none;
  color: #fff;
  border-radius: 5px;
}
.bloco3 img {
  max-width: 74px;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.1);
}
.color-cinza{
  color: #9b9b9b;
}
.bloco3 p {
  font-size: 13px;
  color: #5b5b5b;
  padding: 0px 0px 20px 0px;
}

</style>
