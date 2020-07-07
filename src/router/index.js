import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleProduct from '../views/SingleProduct.vue'
import CartPage from '../cart/CartPage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products/:id',
        name: 'products',
        component: SingleProduct
    },
    {
        path: '/cart',
        name: 'CartPage',
        component: CartPage
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router