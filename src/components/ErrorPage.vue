<template>
  <div class="error">
    <h1>
      Error 404.<br />
      Page Not Found
    </h1>
    <br />
    <router-link to="/"  > 
    <v-btn @click= "$store.state.Page_Permission=true"> Back to Home page</v-btn>
    </router-link>
    
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import store from '../store'
  @Component
  export default class  extends Vue {
    
  }
</script>

<style scoped>
.error {
  text-align: center;
  margin-top: 200px;
}
.error h1 {
  color: brown;
  font-size: 100px;
}
</style>