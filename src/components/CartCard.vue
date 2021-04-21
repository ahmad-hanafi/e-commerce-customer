<template>
<div>
    <table class="table" style="color: white">
      <thead>
        <tr>
          <th scope="col-1">No</th>
          <th scope="col-3">Image</th>
          <th scope="col">Name</th>
          <th scope="col-1">Stock</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col" colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list, i) in cart" :key="i">
          <th scope="row">{{ i+1 }}</th>
          <td>
            <img :src="list.Product.image_url" alt="" width="350px" />
          </td>
          <td>{{ list.Product.name }}</td>
          <td>{{ list.Product.stock }}</td>
          <td><button
            type="button"
            class="btn btn-success mr-2"
            @click="incrementCart(list.id)"
          >
            +
          </button>
           {{ list.quantity }}  
          <button 
          type="button" 
          class="btn btn-danger ml-2"
          @click="decrementCart(list.id)"
          >
          -
          </button></td>
          <td>Rp {{ (list.Product.price * list.quantity) }}</td>
          <td>
          <button
            class="btn btn-danger mr-2 ml-2"
            @click.prevent="deleteCart(list.id)"
          >
            Delete Cart
          </button>
          <button
            class="btn btn-success mr-2 ml-2"
            @click.prevent="checkoutCart(list.id)"
          >
            Checkout
          </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>

<script>
export default {
  name: "Cart",
  methods: {
    getCart() {
      this.$store.dispatch("getCart");
    },
    incrementCart(id) {
      this.$store.dispatch(`incrementCart`, {
          id: id,
      });
    },
    decrementCart(id) {
      this.$store.dispatch(`decrementCart`, {
        id: id
      });
    },
    deleteCart(id) {
      this.$store.dispatch("deleteCart", {
        id: id,
      });
    },
    checkoutCart(id) {
      this.$store.dispatch("checkoutCart", {
        id: id,
      });
    },
  },
  mounted() {
    this.getCart();
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
};
</script>

<style>
.table {
  color: aliceblue;
}
</style>
