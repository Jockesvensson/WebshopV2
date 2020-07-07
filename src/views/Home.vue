<template>
<div>
  <ShoppingCart/>
  <div class="l-constrained">

    <div class="">
        <button class="btn-show btn-show1" @click="showAll()">ALL</button>
        <button class="btn-show btn-show1" @click="showHeads()">HEADS</button>
        <button class="btn-show btn-show1" @click="showTorsos()">TORSOS</button>
        <button class="btn-show btn-show1" @click="showArms()">ARMS</button>
        <button class="btn-show btn-show1" @click="showBases()">BASES</button>
    </div>

    <h2 class="border-title"><span>Produkter</span></h2>
    <ul class="product-gallery">
      <div class="product-item" v-for="product in filteredData" :key="product.id">
        
        <li>
          <div class="product-item__img">
            <img :src="product.image" alt="Product image">
          </div>
          <h3 class="product-item__title">{{product.title}}</h3>
          <div class="product-item__price">{{product.cost}} kr
          <div class="product-item__buttons">
              <router-link :to="'/products/' + product.id"><button class="details-btn">INFO</button></router-link>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</div>
</template>

<script>
import ShoppingCart from '../shared/ShoppingCart'
export default {
  name: 'Home',
  data() {
    return {
      currentFilterProperty: '',
      currentFilterValue: '',
    }
  },
  components: {ShoppingCart},
  computed: {
    products() {
      return this.$store.getters.currentProduct;
    },
    filteredData() {
      var self = this;
      if(this.currentFilterValue != undefined && this.currentFilterValue != '') {
          return this.products.filter(function(d) {
              return d.type.indexOf(self.currentFilterValue) != -1;
          });
      } else {
          return this.products;
      }
    }
  },
  methods: {
    showAll() {
        this.currentFilterValue = ''
    },
    showHeads() {
        this.currentFilterValue = 'Heads'
    },
    showTorsos() {
        this.currentFilterValue = 'Torsos'
    },
    showArms() {
        this.currentFilterValue = 'Arms'
    },
    showBases() {
        this.currentFilterValue = 'Bases'
    },
    }
}
</script>

<style scoped>

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    text-align: center;
}

a {
    color: #000;
    text-decoration: none;
}

ul {
    margin: 0;
    padding: 0;
    display: flex;
    text-align: center;
    list-style: none;
}

.l-constrained {
    position: relative;
    max-width: 1150px;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
}

.product-gallery {
    margin-bottom: 30px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 250px));
    justify-content: center;
    align-items: center;
}


.product-item {
    margin: 10px 0px;
    border: 1px solid lightgray;
}

.product-item__title {
    font-size: 14px;
    color: #a5a5a5;
}

.product-item__price {

}

.product-item__buttons {
    position: relative;
    width: 235px;
    height: 50px;
    display: border-box;
}

.details-btn {
    position: absolute;
    bottom: 10%;
    left: 43%;
    transform: translate(-20%, 0%);
    width: 80px;
    height: 30px;
    text-align: center;
    border: 1px solid #a5a5a5;
    background-color: #ffffff;
}

@media only screen and (max-width: 319px) {
  .details-btn{
    bottom: 10%;
    left: 42%;
    transform: translate(-20%, 0%);
  }
}

.details-btn:hover{
  background-color: lightblue;
  color: white;
  border: 1px solid lightblue;
}

.border-title {
    position: relative;
    text-align: center;
}

.border-title span {
    position: relative;
    z-index: 2;
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #fff;
}

.border-title:after {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background-color: #eee;
    content: '';
}

img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0 auto;
}

.btn-show{
    position: relative;
    overflow: hidden;
    max-width: 264px;
    box-sizing: border-box;
    min-height: 48px;
    text-align: center;
    flex-shrink: 0;
    white-space: normal;
}

@media only screen and (max-width: 319px) {
  .btn-show{
    font-size: 11px;
  }
}

.btn-show1{
    border: 0;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    outline: none;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
}
.btn-show.btn-show1:hover {
    color: lightblue;
}


</style>
