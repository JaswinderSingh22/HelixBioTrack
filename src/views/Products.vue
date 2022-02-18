<template>
  <div>
    <v-app  >
    <div v-if="$store.state.PagePermission==true">
      <v-card  >
        <v-card-text>
          <v-container>
            <v-row>
              <Table />
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
      </div>
      <ErrorPage v-if="$store.state.PagePermission==false"/>
    </v-app>
      

  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import Table from "../components/Table.vue";
import ErrorPage from '../components/ErrorPage.vue'

@Component({
  components: {
    Table,
    ErrorPage
  },
})
export default class extends Vue {

}
</script>

<style scoped>
</style>