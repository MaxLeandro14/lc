<template>
  <div>
  <q-toolbar style="background: rgb(251, 251, 251); border-bottom: 1px solid #e8e4e4;">
<q-toolbar-title class="primary-font" style="font-size: 16px;">
Encontrar Perfis
</q-toolbar-title>
  <!--<q-btn flat round dense icon="more_vert" style="color: #00d15a" />-->
</q-toolbar>
    <div class="q-pa-md q-gutter-sm">
      <div class="row">
        <q-input bg-color="white" style="width: 100%; margin: 0px auto 20px auto; font-family: poppins; color: #d8d8d8;" rounded filled  v-model="text" label="Pesquise...">
          <template v-slot:append style="font-size: 10px;">
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: 'Error404'
}
</script>
