<template>
  <div>
    <v-container>
      <v-card height="580px">
        <div d-flex>
          <v-card-title
            ><v-icon large color="primary" class="mr-3" >mdi-cart</v-icon> Shopping Cart
            <v-spacer></v-spacer>
            <v-icon class="mr-5" color="red" >mdi-heart</v-icon>
            <v-icon class="mr-3" color="primary" >mdi-tag-multiple</v-icon>
            <v-icon @click="ClearCart()" class="mr-3" color="red" >mdi-delete</v-icon>
            <v-icon color="black" >mdi-content-save-all</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <div>
            <v-container class="ITEM_CART" style="text-align: center">
              <div class="Cart" v-if="$store.state.ShowCart == false">
                There are no Items in the Cart
              </div>
              <div
                class="Cart d-flex"
                v-else
                v-for="(Item, index) in $store.state.CartArray"
                :key="index"
              >
                <span>{{ $store.state.CartArray[index].Name }}</span>
                <v-spacer></v-spacer>
                <span>{{ $store.state.CartArray[index].Count }} Units</span>
                <v-spacer></v-spacer>
                <span>Rs. {{ CountPrice(index) }}</span>
              </div>
            </v-container>
          </div>
          <v-divider></v-divider>
          <div style="height: 40px">
            <span style="margin-left: 20px">Sub-Total</span>
            <span style="margin-left: 240px"> Rs. {{ SubTotal() }}</span>
          </div>
          <v-divider></v-divider>
          <div style="height: 40px">
            <span style="margin-left: 20px">Tax</span>
            <span style="margin-left: 285px"> Rs {{ Tax() }}</span>
          </div>
          <v-divider></v-divider>
          <div style="height: 40px">
            <span style="margin-left: 20px">Total</span>
            <span style="margin-left: 280px">Rs. {{ GrandTotal() }}</span>
          </div>
          <br />

          <v-dialog transition="dialog-bottom-transition" width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="green" v-bind="attrs" v-on="on" width="100%"
                >SEND TO ORDER FULLFILLMENT</v-btn
              >
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-card-text>
                  <div class="text-h2 pa-12">Order Placed Successfully</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
@Component({
  computed: {
    ...mapGetters(["All_Products"]),
  },
})
export default class extends Vue {
  CountPrice(index: number) {
    return (
      store.state.CartArray[index].Count * store.state.CartArray[index].Price
    );
  }

  SubTotal() {
    let Total = 0;
    for (let i = 0; i < store.state.CartArray.length; i++) {
      Total += store.state.CartArray[i].Price * store.state.CartArray[i].Count;
    }
    return Total;
  }
  Tax() {
    let tax = 0;
    for (let i = 0; i < store.state.CartArray.length; i++) {
      tax +=
        (store.state.CartArray[i].Tax / 100) *
        store.state.CartArray[i].Count *
        store.state.CartArray[i].Price;
    }
    return tax.toFixed(2);
  }

  GrandTotal() {
    return +this.SubTotal() + +this.Tax();
  }
  ClearCart() {
    store.state.CartArray = [];
  }
}
</script>

<style scoped>
.ITEM_CART {
  height: 300px;
  overflow: scroll;
}
</style>