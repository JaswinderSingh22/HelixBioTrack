import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../components/Form.vue'
import Update_form from '../components/Update_form.vue'
import Products from '../views/Products.vue'
import Error_Page from '../components/Error_Page.vue'
import Permission from '../views/Permission.vue'
import Point_Sale from '../views/Point_Sale.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Form',
    name: 'Form',
    component: Form
  },
  {
    path: '/Update_form',
    name: 'Update_form',
    component: Update_form
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/Permission',
    name: 'Permission',
    component: Permission
  },
  {
    path: '/Point_Sale',
    name: 'Point_Sale',
    component: Point_Sale
  },
  {
    path: '/*',
    name: 'Error_Page',
    component: Error_Page
  },
  
]

const router = new VueRouter({
  routes
})

export default router
