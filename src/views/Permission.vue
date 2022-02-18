<template>
  <div>
    <v-app>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row><Permissions /> </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Permissions from "../components/Permissions.vue";

@Component({
  components: {
    Permissions,
  },
})
export default class extends Vue {}
</script>

<style scoped>
</style>