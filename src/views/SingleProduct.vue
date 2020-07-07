<template>
    <div>
        <ShoppingCart/>
        <div class="back-container">
            <router-link to="/"><button class="back-btn"><span class="glyphicon glyphicon-arrow-left"></span> Startsida</button></router-link>
        </div>
        <div class="product-item__img">
            <img :src="product.image" alt="Product image">
        </div>
        <div class="product-item__wrapper">
            <div class="product-item__title">{{product.title}}</div>
            <div class="product-item__type">{{product.type}}</div>
            <div class="product-item__cost">{{product.cost}} kr</div>
            <div class="product-item__description">{{product.description}}</div>
        </div>
        <div class="product-item__buttons">
            <button class="add-to-cart-btn" @click.prevent="addToCartNew(product)" @click="addedToCart">Lägg i varukorg</button>
        </div>
        <div class="addedToCart">
            <transition name="fade" mode="out-in">
                <div v-if="addedToCartClicked" class="alert" role="alert">
                    Produkt tillagd!
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import ShoppingCart from '../shared/ShoppingCart'
export default {
    name: 'SingleProduct',
    data() {
        return {
            id: this.$route.params.id,
            count: 1,
            addedToCartClicked: false,
        }
    },
    components: {ShoppingCart},
    computed: {
        product() {
            return this.$store.state.products[this.id - 1];
        },
    },    
    methods: {
        
        addToCartNew(product) {
            this.$store.commit('addToCartNew', product);
            this.show = true;
        },
        removeQuantityFromCart(product) {
            this.$store.commit('removeQuantity', product);
        },
        addedToCart() {
            this.addedToCartClicked = true,
            setTimeout(() => {
                this.addedToCartClicked = false
            }, 3000)
        }     
    }
}
</script>

<style scoped>

img {
    max-width: 50%;
    max-height: 50%;
    display: block;
    margin: 0 auto;
}

.product-item__wrapper{
    margin: 0px 5%;
}

.product-item__title{
    font-size: 32px;
    margin: 40px 0px 10px 0px;
}

.product-item__type{
    font-size: 24px;
    margin-bottom: 10px;
}

.product-item__cost{
    font-size: 20px;
    margin-bottom: 10px;
}

.product-item__description{
    font-size: 16px;
}

.add-to-cart-btn {
    width: 140px;
    height: 40px;
    text-align: center;
    border: 1px solid #a5a5a5;
    background-color: #ffffff;
    margin: 20px 0px;
}

.add-to-cart-btn:hover{
  background-color: lightgreen;
  color: white;
}

.alert{
    position: relative;
    display: inline-block;
    background-color: lightgreen;
    padding: 15px;
    width: 150px;
    top: -115px;
}
.fade-enter-active,
.fade-leave-acive {
    transition: opacity 1.3s ease;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.back-container{
  position: absolute;
  top: 0%;
  left: 20%;
  width: 60%;
}

.back-btn{
    text-align: center;
    margin: 15px 0px 0px 0px;
    height: 35px;
    width: 100px;
    border: 1px solid #a5a5a5;
    background-color: #ffffff;
    color: black;
}

.back-btn:hover{
    background-color: lightblue;
    border: 1px solid lightblue;
    color: white;
}

</style>