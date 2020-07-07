<template>
    <div class="cart-items">
        <router-link :to="'/cart'"><div id="cart">
            <span class=""><i class="glyphicon glyphicon-shopping-cart"></i></span>
        </div></router-link>
        <div id="count">
            {{cartCount}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShoppingCart',
    data() {
        return {

        }
    },
    computed: {
        cartCount() {
            return this.$store.state.cartCount;
        }
    }
}
</script>

<style scoped>

.cart-items{
    overflow: hidden;
}
#cart{
    float: right;
    margin-left: -50%;
    margin-top: 0.7em;
    margin-right: 0.7em;
    font-size: 26px;
}
#count{
    position: relative;
    float: right;
    margin-left: -50%;
    margin-top: 0.4em;
    margin-right: 0.5em;
    background: red;
    border-radius: 50%;
    width: 20px;
    height: 24px;
    color: white;
}

</style>