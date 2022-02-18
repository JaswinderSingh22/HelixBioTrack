<template>
  <div>
    <v-app>
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
import Table from "../components/Table.vue";

@Component({
  components: {
    Table,
  },
})
export default class extends Vue {}
</script>

<style scoped>
</style>