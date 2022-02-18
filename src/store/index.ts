import axios from 'axios'
import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)
export interface TYPE {
  Products: [
    {
      id: number
      Name: string
      Gender: string
      Size: string
      Color: string
      Price: number
      Tax: number
      Quantity: number
      Count: number
      OverLay: boolean

    }
  ],

  EditedId: number
  // EditedDetails: []
  PagePermission: boolean
  EditPermission: boolean
  ProductPermisson: boolean
  PricePermission: boolean
  ProductName: boolean
  ProductGender: boolean
  ProductSize: boolean
  ProductColor: boolean
  ProductPrice: boolean
  ProductTax: boolean
  ProductQuantity: boolean
  AddPermission: boolean
  RemovePermission: boolean
  TableDataPermisson: boolean
  CartIndex: number
  ShowCart: boolean
  CartArray: any[]

}

export default new Vuex.Store<TYPE>({
  state: {
    Products: [
      {
        id: 1,
        Name: "Default",
        Gender: "NA",
        Size: "NA",
        Color: "NA",
        Price: 0,
        Tax: 0,
        Quantity: 0,
        Count: 0,
        OverLay: false

      }
    ],

    EditedId: 0,
    PagePermission: true,
    EditPermission: true,
    ProductPermisson: true,
    PricePermission: true,
    ProductName: true,
    ProductGender: true,
    ProductSize: true,
    ProductColor: true,
    ProductPrice: true,
    ProductTax: true,
    ProductQuantity: true,
    AddPermission: true,
    RemovePermission: true,
    TableDataPermisson: true,
    CartIndex: 0,
    ShowCart: false,
    CartArray: []



  },
  getters: {
    AllProducts: state => state.Products,

  },


  mutations: {
    SET_PRODUCTS(state, payload) {
      state.Products = payload

    },
    ADD_PRODUCT(state, payload) {
      state.Products.push(payload)
    },
    REMOVE_PRODUCT(state, payload: number) {

      const data = state.Products.filter(product => product.id !== payload)
      console.log(data)
      state.Products = data

    },
    REMOVE_ALL(state) {

      state.Products = []
    },

    UPDATE_PRODUCTS(state, payload) {

      state.Products[payload.id - 1] = payload

    },

    Show_OverLay(state, payload) {
      state.Products[payload].OverLay = true

    },

    INCREMENT(state, payload) {
      if (state.Products[payload].Count >= 0 && state.Products[payload].Count < state.Products[payload].Quantity) {
        state.Products[payload].Count++
      }
    },
    DECREMENT(state, payload) {
      if (state.Products[payload].Count > 0) {
        state.Products[payload].Count--
      }
    }

  },
  actions: {
    async GetProducts({ commit }) {
      const response = await axios.get("http://localhost:3000/Details");
      commit("SET_PRODUCTS", response.data)
    },
    async AddProduct({ commit }, payload: TYPE) {
      const response = await axios.post("http://localhost:3000/Details", payload)
      commit("ADD_PRODUCT", response.data)
    },

    async RemoveProduct({ commit }, payload: number) {

      await axios.delete(`http://localhost:3000/Details/${payload}`)
      commit("REMOVE_PRODUCT", payload)
    },
    async RemoveAll({ commit }) {

      commit('REMOVE_ALL')
    },


    async update_details({ commit }, payload: any) {
      const response = await axios.put(`http://localhost:3000/Details/${this.state.EditedId}`, payload)
      commit('UPDATE_PRODUCTS', response.data)
    },

    ShowOverLay({ commit }, payload) {
      console.log(this.state.Products)
      commit("Show_OverLay", payload)
    },
    Increment({ commit }, payload) {
      commit("INCREMENT", payload)
    },
    Decrement({ commit }, payload) {
      commit("DECREMENT", payload)
    }




  },
  modules: {
  }
})
