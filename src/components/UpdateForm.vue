<template>
  <div>
    <v-app>
  <Nav_bar/>
      <v-container fluid style="width: 50%">
        <v-card>
          <v-sheet elevation="6">
            <v-tabs
              background-color="cyan"
              dark
              next-icon="mdi-arrow-right-bold-box-outline"
              prev-icon="mdi-arrow-left-bold-box-outline"
              show-arrows
            >
              <v-tabs-slider color="yellow"></v-tabs-slider>
              <v-tab> Product Details </v-tab>

              <v-tab-item>
                <v-card>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col md="3">
                          <v-text-field
                            label="Product name"
                            v-model="name"
                            v-show="$store.state.ProductName"
                          ></v-text-field>
                        </v-col>
                        <v-col md="3">
                          <v-select
                            :items="['Male', 'Female', 'Other']"
                            label="Select Gender"
                            v-model="gender"
                             v-show="$store.state.ProductGender"
                          >
                          </v-select>
                        </v-col>
                        <v-col md="3">
                          <v-select
                            :items="['XS', 'S', 'M', 'L', 'XL', 'XXL']"
                            label="Select Size"
                            v-model="size"
                             v-show="$store.state.ProductSize"
                          ></v-select>
                        </v-col>
                        <v-col md="2">
                          <v-text-field
                            label="Color"
                            v-model="color"
                             v-show="$store.state.ProductColor"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab> Price Details </v-tab>

              <v-tab-item>
                <v-card>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col md="3">
                          <v-text-field
                            label="Price in Rupees"
                            v-model="price"
                             v-show="$store.state.ProductPrice"
                          ></v-text-field>
                        </v-col>
                        <v-col md="3">
                          <v-text-field
                            label="Tax (%)"
                            v-model="tax"
                             v-show="$store.state.ProductTax"
                          ></v-text-field>
                        </v-col>

                        <v-col md="2">
                          <v-text-field
                            label="Quantity"
                            v-model="quantity"
                             v-show="$store.state.ProductQuantity"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-sheet>
        </v-card>
      </v-container>
      <v-container fluid style="width: 50%">
        <v-toolbar flat>
          <v-btn color="primary" dark class="mt-4" to="/Products"> Cancel </v-btn>
          <v-btn color="primary" dark class="mt-4 ml-3" @click="reset_form">
            CLEAR
          </v-btn>
          <v-spacer></v-spacer>
          <router-link to="/Products">
            <v-btn color="primary" dark class="mt-4" @click="UpdateDetails">
              UPDATE DETAILS
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-container>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import store from "../store";
import Nav_bar from "./Navbar.vue";

@Component({
  ...mapActions(["Update_Product"]),
  computed: {
    ...mapGetters(["AllProducts"]),
  },
    components:{
      Nav_bar
    }
})
export default class extends Vue {
  name = "";
  gender = "";
  size = "";
  color = "";
  price = null;
  tax = null;
  quantity = null;

  reset_form(): void {
    this.name = "";
    this.gender = "";
    this.size = "";
    this.color = "";
    this.price = null;
    this.tax = null;
    this.quantity = null;
  }
  mounted() {
    // this.name=store.state.Products[store.state.EditedId-1].name
    console.log(store.state.Products);
    console.log(store.state.EditedId - 1);
    this.name = store.state.Products[store.state.EditedId - 1].Name;
    this.gender = store.state.Products[store.state.EditedId - 1].Gender;
    this.size = store.state.Products[store.state.EditedId - 1].Size;
    this.color = store.state.Products[store.state.EditedId - 1].Color;
    this.price = store.state.Products[store.state.EditedId - 1].Price;
    this.tax = store.state.Products[store.state.EditedId - 1].Tax;
    this.quantity = store.state.Products[store.state.EditedId - 1].Quantity;
  }

  UpdateDetails() {
    let payload = {
      Name: this.name,
      Gender: this.gender,
      Size: this.size,
      Color: this.color,
      Price: this.price,
      Tax: this.tax,
      Quantity: this.quantity,
      Count:0,
      OverLay:false
      
    };
    
    store.dispatch("UpdateDetails", payload);
  }
}
</script>

<style scoped>
</style>