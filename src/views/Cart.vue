<template>
<div>
  <Navbar />

  <Cart />
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Cart from '@/components/CartCard.vue'

export default {
  components: {
    Navbar,
    Cart
  }
}
</script>

<style>

</style>