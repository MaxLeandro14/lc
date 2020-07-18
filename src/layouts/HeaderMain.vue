<template>
  <div class="q-pa-md q-gutter-sm">
    <div class="row  flex-center">
      <div class="col-2 text-center">
        <img @click="leftDrawerOpen = !leftDrawerOpen" class="img-menu" src="~assets/menu.svg">
      </div>
      <div class="col text-center primary-font ext-subtitle1 link-person">
        <router-link :to="{ name: 'seguindo'}" >
          <span class="text-bold">221<br></span> Seguindo
        </router-link>
      </div>
      <div class="col text-center primary-font ext-subtitle1">
        <router-link :to="{ name: 'seguidores'}" >
          <span class="text-bold">221<br></span> Seguidores
        </router-link>
        </div>
      <div class="col-2">
        <q-btn dense round flat icon="notifications_none" @click="drawerRight = !drawerRight" >
          <q-badge color="red" floating transparent>
            4
          </q-badge>
        </q-btn>
      </div>
      <div class="col-2 text-center">
        <q-avatar>
          <img src="~assets/remove/Max.jpg">
        </q-avatar>
      </div>
    </div>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >

     <q-scroll-area style="height: calc(100% - 150px); border-right: 1px solid #ddd">
          <q-list padding>

            <q-item clickable v-ripple>
              <q-item-section avatar style="min-width: 40px; color: #4caf50;">
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Convidar
              </q-item-section>
            </q-item>

             <q-item clickable v-ripple>
              <q-item-section avatar style="min-width: 40px; color: rgb(128, 128, 128);">
                <q-icon name="list_alt" />
              </q-item-section>

              <q-item-section>
                 Anotação
              </q-item-section>
            </q-item>

              <q-item clickable v-ripple>
              <q-item-section avatar style="min-width: 40px; color: rgb(128, 128, 128);">
                <q-icon name="sensor_door" />
              </q-item-section>

              <q-item-section>
                <router-link :to="{ name: 'criarsala'}" >
                  Criar sala de leitura
                </router-link>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar style="min-width: 40px; color: rgb(128, 128, 128);">
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Avaliar
              </q-item-section>
            </q-item>

             <q-item clickable v-ripple>
              <q-item-section avatar style="min-width: 40px; color: rgb(128, 128, 128);">
                <q-icon name="person_add_disabled" />
              </q-item-section>

              <q-item-section>
                Suspender conta
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar style="min-width: 40px; color: rgb(128, 128, 128);" >
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                Sobre
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

    </q-drawer>

    <q-drawer
        side="right"
        v-model="drawerRight"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <div class="notifica">Notificações</div>
          <div class="q-pa-sm notifica-msg">
            <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
          </div>
        </q-scroll-area>
      </q-drawer>

  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      drawerRight: false
    }
  }
}
</script>
<style>
.img-menu{
  width: 30px
}
.notifica{
  padding: 9px;
  border-bottom: 1px solid #e6e3e3;
  background: #f9f6f6;
  font-size: 17px;
  margin-bottom: 14px;
  color: #1d1d1d;
}
.notifica-msg > div {
  padding: 5px 7px;
  background: #f3f3f3;
  font-size: 14px;
  margin-bottom: 6px;
  color: #484545;
}
</style>
