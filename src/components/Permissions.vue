<template>
  <v-card style="width: 80%" class="card">
    <Normal_Nav/>
    <v-container fluid class="ml-12 mt-5">
      <v-row>
        <v-switch
          inset
          v-model="$store.state.Page_Permission"
          label="PRODUCTS"
        ></v-switch>
        <v-switch
          inset
          class="ml-16"
          label="ADD PRODUCT"
          v-model="$store.state.Add_Permission"
        ></v-switch>
        <v-switch
          inset
          class="ml-16"
          label="REMOVE PRODUCT"
          v-model="$store.state.Remove_Permission"
        ></v-switch>
        <v-switch
          inset
          class="ml-16"
          label="TABLE DATA"
          v-model="$store.state.TableData_Permisson"
        ></v-switch>
      </v-row>

      <v-row>
        <v-switch
          inset
          label="EDITING"
          v-model="$store.state.Edit_Permission"
        ></v-switch>
      </v-row>
      <v-row>
        <v-switch
          inset
          label="PRODUCTS"
          class="ml-12"
          v-model="$store.state.Product_Permisson"
        ></v-switch>
        <v-col cols="12" sm="4" md="4" class="my-10">
          <v-switch inset label="NAME" v-model="$store.state.P_Name"></v-switch>
          <v-switch
            inset
            label="GENDER"
            v-model="$store.state.P_Gender"
          ></v-switch>
          <v-switch inset label="SIZE" v-model="$store.state.P_Size"></v-switch>
          <v-switch
            inset
            label="COLOR"
            v-model="$store.state.P_Color"
          ></v-switch>
        </v-col>

        <v-switch
          inset
          label="PRICE"
          v-model="$store.state.Price_Permission"
        ></v-switch>
        <v-col cols="12" sm="4" md="4" class="my-10">
          <v-switch
            inset
            label="PRICE"
            v-model="$store.state.P_Price"
          ></v-switch>
          <v-switch inset label="TAX" v-model="$store.state.P_Tax"></v-switch>
          <v-switch
            inset
            label="QUANTITY"
            v-model="$store.state.P_Quantity"
          ></v-switch>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>   v-model="true 

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../store";
import Normal_Nav from "../components/Normal_Nav.vue"
@Component({
  components:{
    Normal_Nav
  }
})
export default class extends Vue {
  updated() {
    // console.log("Page", store.state.Page_Permission);
    // console.log("Add Product", store.state.Add_Permission);
    // console.log("Remove permission", store.state.Remove_Permission);
    // console.log("Edit permission", store.state.Edit_Permission);
    // console.log("Product permission", store.state.Product_Permisson);
    // console.log("Price permission", store.state.Price_Permission);
    // console.log("Name", store.state.P_Name);
    // console.log("Gender", store.state.P_Gender);
    // console.log("Size", store.state.P_Size);
    // console.log("Color", store.state.P_Color);
    // console.log("Price", store.state.P_Price);
    // console.log("Tax", store.state.P_Tax);
    // console.log("Quantity", store.state.P_Quantity);

    if (store.state.Edit_Permission == false) {
      store.state.Product_Permisson = false;
      store.state.Price_Permission = false;
    }
    if (store.state.Product_Permisson == false) {
      store.state.P_Name = false;
      store.state.P_Gender = false;
      store.state.P_Size = false;
      store.state.P_Color = false;
    }
    if (store.state.Price_Permission == false) {
      store.state.P_Price = false;
      store.state.P_Tax = false;
      store.state.P_Quantity = false;
    }
  }
}
</script>

<style scoped>
.card {
  margin-left: auto;
  margin-right: auto;
}
</style>