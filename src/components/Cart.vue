<template>
  <div>
    <v-container>
      <v-card height="580px">
        <div d-flex>
          <v-card-title
            ><v-icon large color="primary" class="mr-3">mdi-cart</v-icon>
            Shopping Cart
            <v-spacer></v-spacer>
            <v-icon class="mr-5" color="red">mdi-heart</v-icon>
            <v-icon class="mr-3" color="primary">mdi-tag-multiple</v-icon>
            <v-icon @click="ClearCart()" class="mr-3" color="red"
              >mdi-delete</v-icon
            >
            <v-icon color="black">mdi-content-save-all</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <div>
            <v-container class="ItemCart" style="text-align: center">
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
            <span style="margin-left: 280px"
              >Rs. {{ GrandTotal().toFixed(2) }}</span
            >
          </div>
          <br />

          <v-btn color="green" width="100%" @click="OrderPlace"
            >Submit Order</v-btn
          >
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
    ...mapGetters(["AllProducts"]),
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

  OrderPlace() {
    let payload = store.state.CartArray;
    store.state.CartArray = [];
    console.log(payload);
    for (let i = 0; i < payload.length; i++) {
      payload[i].DateTime = new Date().toLocaleString();
      payload[i].TotalAmount =
        payload[i].Price * payload[i].Count +
        (payload[i].Price * payload[i].Count * payload[i].Tax) / 100;
      payload[i].SerialNumber = store.state.SerialNumber;
      store.state.SerialNumber++;
    }
    console.log(payload);

    store.dispatch("OrderPlace", payload);
  }
}
</script>

<style scoped>
.ItemCart {
  height: 300px;
  overflow: scroll;
}
</style>