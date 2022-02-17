<template>
  <v-container>
    <v-app-bar app color="primary" dark>
      <v-avatar color="teal" size="50">JS</v-avatar>
      <router-link to="/">
        <v-icon color="white" size="50">mdi-drag mdi-rotate-90</v-icon>
      </router-link>
      <v-icon color="white" size="45" class="ml-3">mdi-fullscreen</v-icon>
      <v-btn color="white" outlined class="ml-3">DEV</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="mr-16">Helix Bio Track</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        height="570px"
        width="100%"
        class="mt-16"
        color="primary"
      >
        <div>
          <v-container height="550px" width="100%">
            <v-row class="Dflex" style="text-align: center">
              <v-col>
                <v-card
                  fluid
                  height="500"
                  width="200"
                  class="rounded-xl m-10"
                  color="blue lighten-1"
                >
                  <br />
                  <v-icon>mdi-domain</v-icon>
                  <h3>DASHBOARD</h3>
                  <h5>Dashboard Manager</h5>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  fluid
                  height="500"
                  width="330"
                  class="rounded-xl m-10"
                  color="blue lighten-1"
                  dense
                >
                  <br />
                  <v-icon>mdi-store</v-icon>
                  <h3>INVENTORY</h3>
                  <v-row>
                    <v-col class="sty">
                      <h5>Current Inventory</h5>
                      <h5>Inventory Tools</h5>
                      <v-list v-for="item1 in INVENTORY_TOOLS" :key="item1.id">
                        <router-link :to="item1.route">
                          <h6 class="sty2">{{ item1.text }}</h6>
                        </router-link>
                      </v-list>
                    </v-col>
                    <v-col class="sty">
                      <h5>Pricing Tools</h5>
                      <v-list v-for="item2 in PRICING_TOOLS" :key="item2.id">
                        <h6 class="sty2">{{ item2.text }}</h6>
                      </v-list>
                      <h5>Batch Options</h5>
                      <v-list v-for="item3 in BATCH_OPTIONS" :key="item3.id">
                        <h6 class="sty2">{{ item3.text }}</h6>
                      </v-list>
                    </v-col>
                  </v-row>
                  <v-card-subtitle></v-card-subtitle>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  fluid
                  height="500"
                  width="200"
                  class="rounded-xl m-10"
                  color="blue lighten-1"
                >
                  <br />
                  <v-icon>mdi-lock</v-icon>
                  <h3>PERMISSION</h3>
                  <router-link to="/Permission">
                    <h5>Permission Manager</h5>
                  </router-link>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  fluid
                  height="500"
                  width="200"
                  class="rounded-xl m-10"
                  color="blue lighten-1"
                >
                  <br />
                  <v-icon>mdi-cart</v-icon>
                  <h3>RETAIL</h3>
                  <v-list v-for="item4 in RETAIL" :key="item4.id" class="sty">
                    <router-link :to="item4.route">
                      <h6>{{ item4.text }}</h6>
                    </router-link>
                  </v-list>
                  <h5 class="sty">Retail Options</h5>
                  <v-list
                    v-for="item5 in RETAIL_OPTIONS"
                    :key="item5.id"
                    class="sty"
                  >
                    <router-link :to="item5.route">
                      <h6 class="sty2">{{ item5.text }}</h6>
                    </router-link>
                  </v-list>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  fluid
                  height="500"
                  width="200"
                  class="rounded-xl m-10"
                  color="blue lighten-1"
                >
                  <br />
                  <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
                  <h3>REPORTS</h3>
                  <h5>Report Tool</h5>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  fluid
                  height="500"
                  width="200"
                  class="rounded-xl m-10"
                  color="blue lighten-1"
                >
                  <br />
                  <v-icon>mdi-google-maps</v-icon>
                  <h3>LOCATION</h3>
                  <h5 class="sty">Sales Limit</h5>
                  <h5 class="sty">Template Manager</h5>
                  <h5 class="sty">Reservations</h5>
                  <h5 class="sty">Import/Export</h5>
                  <h5 class="sty">wizard</h5>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  fluid
                  height="500"
                  width="200"
                  class="rounded-xl m-10"
                  color="blue lighten-1"
                >
                  <br />
                  <v-icon>mdi-cog-outline</v-icon>
                  <h3>SYSTEM SETTINGS</h3>
                  <h5 class="sty">Data Sharing options</h5>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  fluid
                  height="500"
                  width="200"
                  class="rounded-xl m-10"
                  color="blue lighten-1"
                >
                  <br />
                  <v-icon>mdi-face-agent</v-icon>
                  <h3>SUPPORT</h3>
                  <h5 class="sty">Create a ticket</h5>
                  <h5 class="sty">View Training</h5>
                  <h5 class="sty">Documentation</h5>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-navigation-drawer>
    </v-app-bar>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../store";

@Component
export default class extends Vue {
  drawer = false;
  INVENTORY_TOOLS = [
    { id: 1, text: "Product", route: "/Products" },
    { id: 2, text: "Product Categories", route: "/" },
    { id: 3, text: "Batch Types", route: "/" },
    { id: 4, text: "Strain ", route: "/" },
    { id: 5, text: "Brands", route: "/" },
    { id: 6, text: "Venders", route: "/" },
    { id: 7, text: "Inventory Rooms", route: "/" },
    { id: 8, text: "Inventory Audits", route: "/" },
  ];
  PRICING_TOOLS = [
    { id: 9, text: "Pricing Points", route: "/" },
    { id: 10, text: "Batch level Pricing", route: "/" },
    { id: 11, text: "Member level Pricing", route: "/" },
    { id: 12, text: "Tax Categories", route: "/" },
    { id: 13, text: "Pricing Options", route: "/" },
  ];
  BATCH_OPTIONS = [
    { id: 14, text: "New Batches", route: "/New_Batches" },
    { id: 15, text: "Purchase order", route: "/Purchase_Order" },
    { id: 16, text: "Inbound Transfer", route: "/Inbound_Transfer" },
    { id: 17, text: "Quote", route: "/Quote" },
    { id: 18, text: "Outbound Transfer", route: "/Outbound_Transfer" },
    { id: 19, text: "Drivers", route: "/Drivers" },
    { id: 20, text: "Vehicles", route: "/Vehicles" },
  ];
  RETAIL = [
    { id: 21, text: "Check-in", route: "/Check-in" },
    { id: 22, text: "Point of sale", route: "/Point_Sale" },
    { id: 23, text: "Order fullfillment", route: "/Order_fullfillment" },
    { id: 24, text: "customer profile", route: "/Customer_Profile" },
    { id: 25, text: "Management", route: "/Management" },
    { id: 26, text: "Retail sales History", route: "/Retail_Sales_History" },
  ];
  RETAIL_OPTIONS = [
    { id: 27, text: "Discount Manager", route: "/Discount_Manager" },
    { id: 28, text: "Loyalty Programs", route: "/Loyalty_Programs" },
    { id: 29, text: "Retail settings", route: "/Retail_Settings" },
    { id: 30, text: "Doctors", route: "/Doctors" },
  ];
}
</script>

<style scoped>
.Dflex {
  flex-wrap: nowrap;
  overflow-x: scroll;
}
.sty {
  text-align: initial;
  margin-left: 10px;
  text-decoration: none;
}
.sty2 {
  margin-left: 20px;
}
h6,
h5 {
  color: white;
}
</style>