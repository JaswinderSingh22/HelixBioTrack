<template>
  <v-card style="width: 80%" class="card">
    
    <v-container fluid class="ml-12 mt-5">
      <v-row>
        <v-switch
          inset
          v-model="$store.state.PagePermission"
          label="PRODUCTS"
        ></v-switch>
        <v-switch
          inset
          class="ml-16"
          label="ADD PRODUCT"
          v-model="$store.state.AddPermission"
        ></v-switch>
        <v-switch
          inset
          class="ml-16"
          label="REMOVE PRODUCT"
          v-model="$store.state.RemovePermission"
        ></v-switch>
        <v-switch
          inset
          class="ml-16"
          label="TABLE DATA"
          v-model="$store.state.TableDataPermisson"
        ></v-switch>
      </v-row>

      <v-row>
        <v-switch
          inset
          label="EDITING"
          v-model="$store.state.EditPermission"
        ></v-switch>
      </v-row>
      <v-row>
        <v-switch
          inset
          label="PRODUCTS"
          class="ml-12"
          v-model="$store.state.ProductPermisson"
        ></v-switch>
        <v-col cols="12" sm="4" md="4" class="my-10">
          <v-switch inset label="NAME" v-model="$store.state.ProductName"></v-switch>
          <v-switch
            inset
            label="GENDER"
            v-model="$store.state.ProductGender"
          ></v-switch>
          <v-switch inset label="SIZE" v-model="$store.state.ProductSize"></v-switch>
          <v-switch
            inset
            label="COLOR"
            v-model="$store.state.ProductColor"
          ></v-switch>
        </v-col>

        <v-switch
          inset
          label="PRICE"
          v-model="$store.state.PricePermission"
        ></v-switch>
        <v-col cols="12" sm="4" md="4" class="my-10">
          <v-switch
            inset
            label="PRICE"
            v-model="$store.state.ProductPrice"
          ></v-switch>
          <v-switch inset label="TAX" v-model="$store.state.ProductTax"></v-switch>
          <v-switch
            inset
            label="QUANTITY"
            v-model="$store.state.ProductQuantity"
          ></v-switch>
        </v-col>
      </v-row>
    </v-container>
    <v-btn to="/Products" color="primary" width="100%">SUBMIT</v-btn>
  </v-card>
</template>   

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../store";

@Component({
  components:{
    
  }
})
export default class extends Vue {
  updated() {
    // console.log("Page", store.state.PagePermission);
    // console.log("Add Product", store.state.AddPermission);
    // console.log("Remove permission", store.state.RemovePermission);
    // console.log("Edit permission", store.state.EditPermission);
    // console.log("Product permission", store.state.ProductPermisson);
    // console.log("Price permission", store.state.PricePermission);
    // console.log("Name", store.state.ProductName);
    // console.log("Gender", store.state.ProductGender);
    // console.log("Size", store.state.ProductSize);
    // console.log("Color", store.state.ProductColor);
    // console.log("Price", store.state.ProductPrice);
    // console.log("Tax", store.state.ProductTax);
    // console.log("Quantity", store.state.ProductQuantity);

    if (store.state.EditPermission == false) {
      store.state.ProductPermisson = false;
      store.state.PricePermission = false;
    }
    if (store.state.ProductPermisson == false) {
      store.state.ProductName = false;
      store.state.ProductGender = false;
      store.state.ProductSize = false;
      store.state.ProductColor = false;
    }
    if (store.state.PricePermission == false) {
      store.state.ProductPrice = false;
      store.state.ProductTax = false;
      store.state.ProductQuantity = false;
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