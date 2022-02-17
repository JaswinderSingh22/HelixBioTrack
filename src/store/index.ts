import axios from 'axios'
import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)
export interface type {
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
      Count:number
      OverLay:boolean

    }
  ],

  Edited_Id: number
  Edited_details: []
  Page_Permission: boolean
  Edit_Permission: boolean
  Product_Permisson: boolean
  Price_Permission: boolean
  P_Name: boolean
  P_Gender: boolean
  P_Size: boolean
  P_Color: boolean
  P_Price: boolean
  P_Tax: boolean
  P_Quantity: boolean
  Add_Permission: boolean
  Remove_Permission: boolean
  TableData_Permisson: boolean
  CartIndex:number
  ShowCart:boolean
  CartArray:any[]
  
}

export default new Vuex.Store<type>({
  state: {
    Products: [],

    Edited_Id: 0,
    Edited_details: [],
    Page_Permission: true,
    Edit_Permission: true,
    Product_Permisson: true,
    Price_Permission: true,
    P_Name: true,
    P_Gender: true,
    P_Size: true,
    P_Color: true,
    P_Price: true,
    P_Tax: true,
    P_Quantity: true,
    Add_Permission: true,
    Remove_Permission: true,
    TableData_Permisson: true,
    CartIndex:0,
    ShowCart:false,
    CartArray:[]
    


  },
  getters: {
    All_Products: state => state.Products,

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
      state.Products = data

    },
    REMOVE_ALL(state) {

      state.Products = []
    },

    UPDATE_PRODUCTS(state, payload) {

      state.Products[payload.id - 1] = payload

    },

    Show_OverLay(state,payload){
      state.Products[payload].OverLay=true
      
    },

    INCREMENT(state,payload){
      if(state.Products[payload].Count>=0 && state.Products[payload].Count<state.Products[payload].Quantity){
      state.Products[payload].Count++
      }
    },
    DECREMENT(state,payload){
      if(state.Products[payload].Count>0){
      state.Products[payload].Count--
      }
    }

  },
  actions: {
    async Get_Products({ commit }) {
      const response = await axios.get("http://localhost:3000/Details");
      commit("SET_PRODUCTS", response.data)
    },
    async add_product({ commit }, payload: type) {

      const response = await axios.post("http://localhost:3000/Details", payload)

      commit("ADD_PRODUCT", response.data)
    },

    async remove_product({ commit }, payload: number) {

      await axios.delete(`http://localhost:3000/Details/${payload}`)
      commit("REMOVE_PRODUCT", payload)
    },
    async remove_all({ commit }) {

      commit('REMOVE_ALL')
    },


    async update_details({ commit }, payload: any) {
      const response = await axios.put(`http://localhost:3000/Details/${this.state.Edited_Id}`, payload)
      commit('UPDATE_PRODUCTS', response.data)
    },

    ShowOverLay({commit},payload){
      console.log(this.state.Products)
      commit("Show_OverLay",payload)
    },
    Increment({commit},payload){
      commit("INCREMENT",payload)
    },
    Decrement({commit},payload){
      commit("DECREMENT",payload)
    }
    



  },
  modules: {
  }
})
