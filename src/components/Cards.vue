<template>
  <div>
    <v-container>
      <v-row style="text-align: center">
        <v-col
          v-for="(Item, index) in AllProducts"
          :key="index"
          cols="4"
        >
          <v-card width="100px%" height="200px" class="FRONT">
            <h3>{{ Item.Name }}</h3>
            <img
              src="../assets/product.png"
              alt="product-image"
              style="height: 30px"
            />
            <br />

            <h6>Total THC : 0</h6>
            <h6>Total CBD : 0</h6>
            <h4>{{ Item.Quantity }} Units Available</h4>
            <h4>Rs.{{ Item.Price }} Per Unit</h4>
            <v-btn @click="ShowOverLay(Item, index)" class="mt-2">Select</v-btn>

            <v-overlay
              :absolute="absolute"
              :value="AllProducts[index].OverLay"
            >
              <v-card color="grey" height="200px" width="150px">
                <v-btn small @click="AllProducts[index].OverLay = false"
                  >X</v-btn
                >
                <h3>{{ Item.Name }}</h3>

                <br />
                <h4>{{ Item.Quantity }} units Available</h4>
                <h4>Rs.{{ Item.Price }} Per Unit</h4>
                <v-btn small @click="Decrement(Item, index)">-</v-btn>
                {{ AllProducts[index].Count }}
                <v-btn small class="ml-2" @click="Increment(Item, index)"
                  >+</v-btn
                >
                <br />
                <v-btn
                  color="green"
                  small
                  class="mt-3"
                  @click="AddToCart(Item, index)"
                  >Add To Cart</v-btn
                >
              </v-card>
            </v-overlay>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters, mapActions } from "vuex";
import store from "../store";
@Component({
  computed: {
    ...mapGetters(["AllProducts"]),
  },
  methods: {
    ...mapActions(["GetProducts"]),
  },
})
export default class extends Vue {
  absolute = true;
  opacity = 1;

  OverIndex = 0;
  

  ItemCount = 0;

  created() {
    this.GetProducts();

  }

  ShowOverLay(Item: any, index: number) {
    this.OverIndex = index;
    store.dispatch("ShowOverLay", index);
  }

  Increment(Item: any, Index: number) {
    store.dispatch("Increment", Index);
  }

  Decrement(Item: any, Index: number) {
    store.dispatch("Decrement", Index);
  }

  AddToCart(Item:any, Index: number) {
    if (this.AllProducts[Index].Count == 0) {
      alert("Add Item to the Cart");
    } else if(!store.state.CartArray.includes(Item)){
      store.state.CartIndex = Index;
      store.state.ShowCart = true;
      store.state.CartArray.push(Item)
    }
  }
}
</script>

<style scoped>
</style>