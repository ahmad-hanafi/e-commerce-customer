<template>
  <div class="container">
    <div class="row">
      <div
        class="card mt-2 mr-2 ml-2 mb-2"
        style="width: 18rem; background-color:burlywood"
        v-for="list in products"
        :key="list.id"
      >
        <img :src="list.image_url" class="img-thumbnail" style="height: 300px; border: " alt="gambar" />
        <div class="card-body">
          <h5 class="card-title">{{ list.name }}</h5>
          <footer>
            JENIS: <cite title="Source Title">{{ list.category }}</cite>
          </footer>
          <button type="button" class="btn btn-secondary mt-2 mb-2" disabled>
            Stock : {{ list.stock }}</button
          ><br />
          <a
            class="btn btn-sm btn-primary"
            @click.prevent="addToCart(list.id)"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  methods: {
    addToCart(id) {
      this.$store.dispatch(`addToCart`, {
        ProductId: id,
      });
    },
    getProducts() {
      this.$store.dispatch("getProducts");
    },
  },
  mounted() {
    this.getProducts();
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style>
</style>