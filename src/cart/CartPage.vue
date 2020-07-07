<template>
    <div>
        <div v-if="itemsInCart > 0">

            <div class="back-container">
                <router-link to="/"><button class="back-btn"><span class="glyphicon glyphicon-arrow-left"></span> Startsida</button></router-link>
            </div>
            
            <div v-for="item in newCart" :key="item.id">
                <div id="wrapper">
                    <div id="left">
                        <img :src="item.image" alt="Product image">
                    </div>
                    <div id="right">
                        <p>{{item.title}}</p>
                        <p>{{item.cost * item.quantity}} kr</p>
                        <div class="">
                            <button class="remove-one-btn" @click="removeQuantityFromCart(item)">
                                <span class=""><i class="glyphicon glyphicon-minus"></i></span>
                            </button>
                            <button disabled class="show-total-btn">{{item.quantity}}</button> <!-- riktig fullösning -->
                            <button class="add-one-btn" @click="addToCartNew(item)">
                                <span class=""><i class="glyphicon glyphicon-plus"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="middle">
                <div class="total-cost">
                    Totalt: {{totalPrice}} kr och {{cartCount}} produkter
                </div>
                <div class="remove-all-items">
                    <button class="remove-all-btn" @click.prevent="removeAllFromCart()">Ta bort allt i varukorgen</button>
                </div>
            </div>
        </div>
        
        <div v-else>
            <div class="back-container">
                <router-link to="/"><button class="back-btn"><span class="glyphicon glyphicon-arrow-left"></span> Startsida</button></router-link>
            </div>
            <div class="empty-container">
                Varukorgen är tom!
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartPage',
    data() {
        return {

        }
    },
    computed: {
        newCart() {
            return this.$store.getters.cart;
        },
        itemsInCart() {
            return this.newCart.length;
        },
        totalPrice() {
            let total = 0;

            for(let item of this.$store.state.cart) {
                total += item.totalPrice;
            }

            return total.toFixed(0);
        },
        cartCount() {
            return this.$store.getters.cartCount;
        }
    },
    methods: {
        removeFromCart(product) {
            this.$store.commit('removeFromCart', product);
        },
        removeAllFromCart() {
            this.$store.commit('removeAllFromCart');
        },
        addToCartNew(product) {
            this.$store.commit('addToCartNew', product);
        },
        removeQuantityFromCart(product) {
            if(product.quantity > 1) {

                this.$store.commit('removeQuantity', product);
            } else {
                this.removeFromCart(product);
            }
        },
    }
}
</script>

<style scoped>

.empty-container{
    margin: 50px 20%;
    text-align: left;
}

@media only screen and (max-width: 479px) {
    .empty-container{
        margin: 50px 5%;
    }
}

#wrapper{
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    margin: 10px 20%;
}

@media only screen and (max-width: 479px) {
    #wrapper{
        margin: 10px 5%;
    }
}

#left{
    float:left;
    width:50%;
    padding: 5px 0px;
}
#right{
    float:left;
    width:50%;
    padding: 5px 0px;
}
#middle{
    float: left;
    width: 100%;
    margin-top: 50px;
}

.remove-all-items{
    margin: 30px 0px;
}

.remove-all-btn{
    text-align: center;
    border: 1px solid #a5a5a5;
    background-color: #ffffff;
    height: 40px;
    width: 180px;
}
.remove-all-btn:hover{
    background-color: red;
    color: white;
    border: 1px solid red;
}

.remove-one-btn{
    text-align: center;
    border: 1px solid #a5a5a5;
    background-color: #ffffff;
}
.remove-one-btn:hover{
    background-color: red;
    color: white;
    border: 1px solid red;
}
.add-one-btn{
    text-align: center;
    margin-left: -4px;
    border: 1px solid #a5a5a5;
    background-color: #ffffff;
}
.add-one-btn:hover{
    background-color: green;
    color: white;
    border: 1px solid green;
}
.show-total-btn{
    text-align: center;
    border: 1px solid #a5a5a5;
    background-color: #ffffff;
}

.back-container{
    display: flex;
    align-items: center;
    margin: 10px 20%;
}

@media only screen and (max-width: 479px) {
    .back-container{
        margin: 10px 5%;
    }
}

.back-btn{
    text-align: center;
    margin-top: 20px;
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


ul {
    margin: 0;
    padding: 0;
    display: flex;
    text-align: center;
    list-style: none;
}

img {
    max-width: 50%;
    max-height: 50%;
    display: block;
    margin: 0 auto;
}



</style>