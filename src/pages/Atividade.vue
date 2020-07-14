<template>
  <div>

  <div class="box-inforr">

  </div>
  <div class="q-pa-md row items-center q-gutter-md">
    <div class="col text-center">
      <span>Participantes</span>
    </div>

    <div style="width: 100%;">
      <div class="box-partc">
      <div class="row">
          <div class="col-2">
            <q-avatar size="md">
            <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
          </div>
          <div class="col-10">
            <div class="linear-nome">
              <span>Max Leandro Silva</span>
              <span>30%</span>
            </div>
            <q-linear-progress :value="progress1" color="green" class="q-mt-sm" />
          </div>
      </div>
      </div>
    </div>

    <div style="width: 100%;">
      <div class="box-partc">
      <div class="row">
          <div class="col-2">
            <q-avatar size="md">
            <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
          </div>
          <div class="col-10">
            <div class="linear-nome">
              <span>Max Leandro Silva</span>
              <span>30%</span>
            </div>
            <q-linear-progress :value="progress1" color="green" class="q-mt-sm" />
          </div>
      </div>
      </div>
    </div>

    <div style="width: 100%;">
      <div class="box-partc">
      <div class="row">
          <div class="col-2">
            <q-avatar size="md">
            <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
          </div>
          <div class="col-10">
            <div class="linear-nome">
              <span>Max Leandro Silva</span>
              <span>30%</span>
            </div>
            <q-linear-progress :value="progress1" color="green" class="q-mt-sm" />
          </div>
      </div>
      </div>
    </div>

  </div>

  </div>
</template>

<script >
export default {
  name: 'MainLayout',
  data () {
    return {
      value: 81,
      fab2: false,
      dense: false,
      paginaAtual: 224,
      progress1: 0.3
    }
  },
  computed: {
    progressLabel1 () {
      return (this.progress1 * 100).toFixed(2) + '%'
    }
  }
}
</script>
<style>
.box-partc {
  background: #f1f1f1;
  padding: 9px 5px;
  border-radius: 11px;
  font-size: 12px;
}
.box-inforr{
  background: #fff;
  padding: 5px 13px;
}
.linear-nome {
  display: flex;
  justify-content: space-between
}
</style>
