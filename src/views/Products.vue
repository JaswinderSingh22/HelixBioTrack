<template>
  <div>
  <v-app>
  <Nav_bar/>
    <v-card>
    
      <v-card-text>
        <v-container>
          <v-row>
            <Table />
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Table from '../components/Table.vue'
import Nav_bar from '../components/Nav_bar.vue'
@Component({
    components:{
        Table,
        Nav_bar
    }
})
export default class extends Vue {}
</script>

<style scoped>
</style>