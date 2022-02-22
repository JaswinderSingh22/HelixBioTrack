import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../components/Form.vue'
import UpdateForm from '../components/UpdateForm.vue'
import Products from '../views/Products.vue'
import ErrorPage from '../components/ErrorPage.vue'
import Permission from '../views/Permission.vue'
import PointSale from '../views/PointSale.vue'
import ReportTool from "../views/ReportTool.vue"


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
    path: '/UpdateForm',
    name: 'UpdateForm',
    component: UpdateForm
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
    path: '/PointSale',
    name: 'PointSale',
    component: PointSale
  },
  {
    path: '/ReportTool',
    name: 'ReportTool',
    component: ReportTool
  },
  {
    path: '/*',
    name: 'ErrorPage',
    component: ErrorPage
  },
  
]

const router = new VueRouter({
  routes
})

export default router
