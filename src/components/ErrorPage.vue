<template>
  <div class="Error">
    <h1>
      Error 404.<br />
      Page Not Found
    </h1>
    <br />
    <router-link to="/"  > 
    <v-btn @click= "$store.state.PagePermission=true"> Back to Home page</v-btn>
    </router-link>
    
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  @Component
  export default class  extends Vue {
    
  }
</script>

<style scoped>
.Error {
  text-align: center;
  margin-top: 200px;
}
.Error h1 {
  color: brown;
  font-size: 100px;
}
</style>