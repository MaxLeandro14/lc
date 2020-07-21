<template>
<div>
<div class="row">

  <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
  <q-btn @click="back" flat round dense icon="keyboard_backspace"/>
  <q-toolbar-title class="primary-font" style="font-size: 16px;">
Max Leandro Silva
  </q-toolbar-title>
  <q-btn flat round dense icon="account_circle" style="color: #9c27b0;" @click="contato = true" />
  <q-btn flat round dense icon="share" style="color: #00d15a" />
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

   <!-- -->
    <q-dialog v-model="contato" seamless position="bottom">
      <q-card style="width: 100%; height: 45vh;">
        <q-card-section class="items-center no-wrap">

    <div class="col-12">
      <div class="fechar-contato " @click="contato = false">
        <q-icon name="keyboard_arrow_up" />
      </div>
    </div>
    <div class="col-12">
              <q-list>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Telefone</q-item-label>
          <q-item-label caption lines="2">(98) 987294634</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
        </svg>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>WhatsApp</q-item-label>
          <q-item-label caption lines="2">(98) 987294634</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
      </svg>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Email</q-item-label>
          <q-item-label caption lines="2">maxleandro2@gmail.com</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
        </svg>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Site</q-item-label>
          <q-item-label caption lines="2">www.google.com</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Instagram</q-item-label>
          <q-item-label caption lines="2">@omelhor</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
          </svg>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Telegram</q-item-label>
          <q-item-label caption lines="2">(98) 987294634</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z" />
        </svg>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Facebook</q-item-label>
          <q-item-label caption lines="2">nnnnn/ssd</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
        </svg>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Messenger</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,2C6.36,2 2,6.13 2,11.7C2,14.61 3.19,17.14 5.14,18.87C5.3,19 5.4,19.22 5.41,19.44L5.46,21.22C5.5,21.79 6.07,22.16 6.59,21.93L8.57,21.06C8.74,21 8.93,20.97 9.1,21C10,21.27 11,21.4 12,21.4C17.64,21.4 22,17.27 22,11.7C22,6.13 17.64,2 12,2M18,9.46L15.07,14.13C14.6,14.86 13.6,15.05 12.9,14.5L10.56,12.77C10.35,12.61 10.05,12.61 9.84,12.77L6.68,15.17C6.26,15.5 5.71,15 6,14.54L8.93,9.87C9.4,9.14 10.4,8.95 11.1,9.47L13.44,11.23C13.66,11.39 13.95,11.39 14.16,11.23L17.32,8.83C17.74,8.5 18.29,9 18,9.46Z" />
        </svg>
        </q-item-section>
      </q-item>

    </q-list>

    </div>

        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- -->

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
      busca: 'one',
      contato: false
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
