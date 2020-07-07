import Vue from 'vue'
import Vuex from 'vuex'
import products from './products';

Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');

const store = new Vuex.Store({
    state: {
        products: products,
        // cart: [],
        // cartCount: 0,
        cart: cart ? JSON.parse(cart) : [],
        cartCount: cartCount ? parseInt(cartCount) : 0,
    },
    getters: {
        currentProduct: state => {
            return state.products;
        },
        cart: state => {
            return state.cart;
        },
        cartCount: state => {
            return state.cartCount;
        },

    },
    mutations: {
        // UPDATE_PRODUCT(state, newProduct) {
        //     state.products.pop();

        //     state.products = [newProduct, ...state.products];
        // },
        addToCartNew(state, product) {
            let found = state.cart.find(item => item.id == product.id);

            if (found) {
                found.quantity++;
                found.totalPrice = found.quantity * found.cost;
            } else {
                state.cart.push(product);

                Vue.set(product, 'quantity', 1);
                Vue.set(product, 'totalPrice', product.cost);
            }
            state.cartCount++;
            this.commit('saveCart');
        },
        removeQuantity(state, product) {
            let found = state.cart.find(item => item.id == product.id);

            if (found) {
                found.quantity--;
                found.totalPrice = found.quantity * found.cost;
            } else {
                state.cart.push(product);

                Vue.set(product, 'quantity', 1);
                Vue.set(product, 'totalPrice', product.cost);
            }
            state.cartCount--;
            this.commit('saveCart');
        },
        removeFromCart(state, product) {
            let index = state.cart.indexOf(product);

            if (index > -1) {
                let item = state.cart[index];
                state.cartCount -= item.quantity;

                state.cart.splice(index, 1);
                this.commit('saveCart');
            }
        },
        removeAllFromCart(state) {
            state.cart = [];
            state.cartCount = 0;
        },
        saveCart(state) {
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
            window.localStorage.setItem('cartCount', state.cartCount);
        },
    },
    actions: {

    }
});

export default store;