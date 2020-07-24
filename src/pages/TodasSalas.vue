<template>
  <div>
  <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
<q-toolbar-title class="primary-font" style="font-size: 16px;">
Salas disponíveis
</q-toolbar-title>
  <!--<q-btn flat round dense icon="more_vert" style="color: #00d15a" />-->
</q-toolbar>
    <div class="q-pa-md q-gutter-sm">

      <div class="row salas flex-center">
      <div>
          <img src="~assets/remove/ebook.jpg">
        </div>
        <div>
        <p><span class="color-cinza">Livro: </span>O inimigo</p>
        <p><span class="color-cinza">Início: </span>27/07/2020</p>
        <p><span class="color-cinza">Páginas: </span>320</p>
        <p><span class="color-cinza">Por</span> Editora GloboSat INC</p>
        </div>
      </div>

      <div class="row salas flex-center">
      <div>
          <img src="~assets/remove/ebook.jpg">
        </div>
        <div>
        <p><span class="color-cinza">Livro: </span>O inimigo</p>
        <p><span class="color-cinza">Início: </span>27/07/2020</p>
        <p><span class="color-cinza">Páginas: </span>320</p>
        <p><span class="color-cinza">Por</span> Editora GloboSat INC</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script >
export default {
  name: 'Error404'
}
</script>
<style>
.salas img {
max-width: 70px;
  margin: 5px 14px 5px 0;
}
.salas p {
margin: 0;
padding: 1px 0px;
}
</style>
