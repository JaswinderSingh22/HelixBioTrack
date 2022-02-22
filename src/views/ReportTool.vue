<template>
  <div>
    <h2 style="text-align: center" class="mt-10 mb-10">REPORT TOOL</h2>
    <v-container fluid>
      <div class="table">
        <div class="heading">
          <ul class="d-flex">
            <li>S.No</li>
            <li>S.No</li>
            <li>DATE</li>
            <li>TIME</li>
            <li>NAME</li>
            <li>SIZE</li>
            <li>GENDER</li>
            <li>SIZE</li>
            <li>UNITS</li>
            <li>PRICE</li>
            <li>TAX(%)</li>
            <li>TOTAL</li>
            
          </ul>
        </div>
        <div
          class="data"
          v-for="(Item, Index1) in $store.state.OrderArray"
          :key="Index1"
        >
          <ul class="d-flex" v-for="(cart, Index2) in Item" :key="Index2">
            <li>{{cart.SerialNumber}}</li>
            <li>{{}}</li>
            <li>{{cart.DateTime.slice(0,10)}}</li>
            <li>{{cart.DateTime.slice(11,20)}}</li>
            <li>{{cart.Name}}</li>
            <li>{{cart.Size}}</li>
            <li>{{cart.Gender}}</li>
            <li>{{cart.Size}}</li>
            <li>{{cart.Count}}</li>
            <li>{{cart.Price}}</li>
            <li>{{cart.Tax}}</li>
            <li>{{cart.TotalAmount}}</li>
            
            
            
          </ul>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";

@Component({
  computed: {
    ...mapActions(["GetOrder"]),
  },
})
export default class extends Vue {
  
  

  created() {
    this.GetOrder;
  }
}
</script>

<style scoped>
.table {
  overflow-y: scroll;
  overflow-x: scroll;
  padding: 10px;
  width: 900px;
  height: 350px;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid rgb(76, 152, 196);
}

.heading{
width: 180%;
font-weight: 600;
background-color: rgb(139, 194, 216);

}
.data{

width: 180%;
background-color: rgb(195, 228, 247);

}

ul{
list-style: none;
padding: 0;
}
li{
font-size: 20px;
height: 80px;
text-align: center;

width: 150px;
border: 1px solid black;

}
</style>