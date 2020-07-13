 <template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">

      <q-timeline-entry icon="delete" color="orange">
        <template v-slot:subtitle>
          Julho 21, 2020
        </template>

        <div class="linha-pag">
          5 páginas
        </div>
      </q-timeline-entry>

      <q-timeline-entry icon="delete" color="orange">
        <template v-slot:subtitle>
          Julho 21, 2020
        </template>

        <div class="linha-pag">
          27 páginas
        </div>
      </q-timeline-entry>

      <q-timeline-entry icon="sensor_door" color="green">
        <template v-slot:subtitle>
          Julho 21, 2020
        </template>

        <div class="linha-pag">
          Entrou para a sala
        </div>
      </q-timeline-entry>

    </q-timeline>
  </div>
</template>

<script >
export default {
  name: 'Error404'
}
</script>
<style>
.linha-pag {
margin-top: -16px;
color: #696969;
}
</style>
