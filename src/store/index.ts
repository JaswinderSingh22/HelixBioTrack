import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

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
  OrderDate: any
  SerialNumber:number

  CartArray: [
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
  ]
  OrderArray: [
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
  ]



}

export default new Vuex.Store<TYPE>({
  state: {
    Products: [
      {
        id: 1,
        Name: "Product",
        Gender: "Male",
        Size: "XL",
        Color: "Red",
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
    OrderDate: "",
    CartArray: [],
    OrderArray: [],
    SerialNumber:1





  },
  getters: {
    AllProducts: state => state.Products,
  },


  //-----------------> MUTATIONS <------------------

  mutations: {

    SET_PRODUCTS(state, payload) {
      // console.log(payload)
      const Items = JSON.parse(JSON.stringify(payload))
      // console.log(Items)
      state.Products = Items

    },

    ADD_PRODUCT(state, payload) {
      state.Products.push(payload)
    },

    REMOVE_PRODUCT(state, payload: number) {
      const Items = JSON.parse(JSON.stringify(state.Products))
      const data = Items.filter((product: any) => product.id !== payload)
      // console.log(data) 
      state.Products = data

    },

    REMOVE_ALL(state) {
      state.Products = []
    },

    UPDATE_PRODUCTS(state, payload) {

      state.Products[payload.id - 1] = payload

    },

    SHOW_OVERLAY(state, payload) {
      state.Products[payload].OverLay = true

    },

    INCREMENT(state, payload) {
      if (state.Products[payload].Count >= 0 && state.Products[payload].Count < state.Products[payload].Quantity) {
        state.Products[payload].Count++
        state.Products[payload].Quantity--
      }
    },

    DECREMENT(state, payload) {
      if (state.Products[payload].Count > 0) {
        state.Products[payload].Count--
        state.Products[payload].Quantity++
      }
    },

    ORDER_PLACE(state, payload) {

      state.OrderArray.push(payload)
    },

    GET_ORDER(state, payload) {
      state.OrderArray = payload
    }



  },



  // ------------> ACTIONS <-------------------

  actions: {

    async GetProducts({ commit }) {
      const response = await axios.get("http://localhost:3000/Details");
      commit("SET_PRODUCTS", response.data)
    },

    async AddProduct({ commit }, payload) {
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


    async update_details({ commit }, payload) {
      const response = await axios.put(`http://localhost:3000/Details/${this.state.EditedId}`, payload)
      commit('UPDATE_PRODUCTS', response.data)
    },

    ShowOverLay({ commit }, payload) {
      // console.log(this.state.Products)
      commit("SHOW_OVERLAY", payload)
    },

    Increment({ commit }, payload) {
      commit("INCREMENT", payload)
    },

    Decrement({ commit }, payload) {
      commit("DECREMENT", payload)
    },

    async OrderPlace({ commit }, payload) {


      const response = await axios.post("http://localhost:3000/CartDetails", payload)

      commit("ORDER_PLACE", response.data)
    },
    async GetOrder({ commit }) {
      const response = await axios.get("http://localhost:3000/CartDetails");
      commit("GET_ORDER", response.data)
    },


  },
  modules: {
  }
})
