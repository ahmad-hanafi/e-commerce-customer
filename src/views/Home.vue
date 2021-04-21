<template>
  <div class="home">
    <Navbar />

    <Content />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Content from '@/components/Content.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Content
  }
}
</script>
