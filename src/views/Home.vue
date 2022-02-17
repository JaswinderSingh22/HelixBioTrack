<template>
  <div>
  <v-app>
  <Nav_bar/>
  </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Nav_bar from "../components/Nav_bar.vue";

export default Vue.extend({
  name: "Home",

  components: {
    
    
   Nav_bar
  },
});
</script>
