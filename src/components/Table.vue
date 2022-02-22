<template>
  <v-container fluid style="width: 80%">
    <br />

    <template>
      <v-toolbar flat
        ><v-toolbar-title>PRODUCTS</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn v-show="$store.state.AddPermission" color="primary" dark class="mb-2" to="/Form">
          ADD NEW PRODUCT
        </v-btn>
      </v-toolbar>
    </template>

    <v-card-title></v-card-title>
    <v-container class="tabl" >
      <v-simple-table>
        <template  >
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Size</th>
              <th>Color</th>
              <th>Price</th>
              <th>Tax</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <br>
          <tbody v-show="$store.state.TableDataPermisson" >
            <tr v-for="item in $store.state.Products" :key="item.id" >
              <td>{{ item.Name }}</td>
              <td>{{ item.Gender }}</td>
              <td>{{ item.Size }}</td>
              <td>{{ item.Color }}</td>
              <td>{{ item.Price }}</td>
              <td>{{ item.Tax }}</td>
              <td>{{ item.Quantity }}</td>
              <td>
                <router-link to="/UpdateForm">
                  <v-btn v-show="$store.state.EditPermission" @click="edit_product(item.id)"
                    ><v-icon  class="mr-2"> mdi-pencil </v-icon></v-btn
                  >
                </router-link>

                <v-btn  v-show="$store.state.RemovePermission" @click="RemoveProduct(item.id)"
                  ><v-icon> mdi-delete </v-icon></v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
    <template>
      <v-btn dark class="mb-2" color="red" @click="RemoveAll"> Reset </v-btn>
    </template>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
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
  editedItem = {
    name: "",
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  };
  EditedId = -1;

  created() {
    this.GetProducts();
  }

  RemoveAll(): void {
    alert("Are you sure");
    store.dispatch("RemoveAll");
  }
  RemoveProduct(id: number): void {
    store.dispatch("RemoveProduct", id);
  }

  edit_product(id: number) {
    
    store.state.EditedId = id;
   
  }
}
</script>

<style scoped>

.tabl{
overflow: scroll;
height: 400px;
}

</style>