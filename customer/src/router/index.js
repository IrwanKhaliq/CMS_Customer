import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import FormLogin from '../views/FormLogin.vue'
import FormRegister from '../views/FormRegister.vue'
import AddProduct from '../views/AddProduct.vue'
import Products from '../views/Products.vue'
import ListProduct from '../views/ListProduct.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: FormLogin
  },
  {
    path: '/register',
    name: 'register',
    component: FormRegister
  },
  {
    path: '/add-products',
    name: 'add product',
    component: AddProduct
  },
  {
    path: '/products/:id',
    name: 'products',
    component: Products
  },
  {
    path: '/products/category/:category',
    name: 'products category',
    component: ListProduct
  },
  {
    path: '/carts',
    name: 'carts',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
