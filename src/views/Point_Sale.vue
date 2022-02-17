<template>
  <v-app>
    <Nav_bar />
    <div class="main">
      <Normal_Nav />
      <div class="CONTAINER">
        <div class="CARDS">
          <Cards />
        </div>
        <div class="CART">
          <Cart />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav_bar from "../components/Nav_bar.vue";
import Normal_Nav from "@/components/Normal_Nav.vue";
import Cart from "../components/Cart.vue";
import Cards from "@/components/Cards.vue";
@Component({
  components: {
    Nav_bar,
    Normal_Nav,
    Cart,
    Cards,
  },
})
export default class extends Vue {}
</script>

<style scoped>
.CONTAINER {
  background: rgb(216, 209, 209);
  margin-top: 10px;
  height: 650px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
.CART {
  margin: auto;
  width: 35%;
}
.CARDS {
  background: rgb(216, 209, 209);
  overflow: scroll;
  height: 500px;
  margin: auto;
  width: 45%;
}
</style>