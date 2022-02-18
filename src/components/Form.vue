<template>
  <div>
    <v-app>
    <Nav_bar />
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
                            label="Product Name"
                            v-model="name"
                          ></v-text-field>
                        </v-col>
                        <v-col md="3">
                          <v-select
                            :items="['Male', 'Female', 'Other']"
                            label="Select Gender"
                            v-model="gender"
                          >
                          </v-select>
                        </v-col>
                        <v-col md="3">
                          <v-select
                            :items="['XS', 'S', 'M', 'L', 'XL', 'XXL']"
                            label="Select Size"
                            v-model="size"
                          ></v-select>
                        </v-col>
                        <v-col md="2">
                          <v-text-field
                            label="Color"
                            v-model="color"
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
                          ></v-text-field>
                        </v-col>
                        <v-col md="3">
                          <v-text-field
                            label="Tax (%)"
                            v-model="tax"
                          ></v-text-field>
                        </v-col>

                        <v-col md="2">
                          <v-text-field
                            label="Quantity"
                            v-model="quantity"
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
            <v-btn color="primary" dark class="mt-4" @click="AddProduct">
              SUBMIT PRODUCT
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-container>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";
import store from "../store";
import Navbar from "./Navbar.vue";

@Component({
  ...mapActions(["Add_Product"]),
  components: {
    Navbar,
  },
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

  AddProduct() {
    let payload = {
      Name: this.name,
      Gender: this.gender,
      Size: this.size,
      Color: this.color,
      Price: this.price,
      Tax: this.tax,
      Quantity: this.quantity,
      OverLay:false,
      Count:0,
      
      
    };
    console.log(payload)
    store.dispatch("AddProduct", payload);
  }
}
</script>

<style scoped>
</style>