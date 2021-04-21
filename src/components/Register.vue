<template>
  <div class="form-signup">
    <!-- <Navbar /> -->
      <hr />
      <form>
        <h1 class="h3 mb-3 fw-normal">Welcome to the Club!</h1>
        <br />
        <p> We welcome you here, just put your email and password for sign up</p>
        <label for="email">Email address</label><br />
        <input
          type="email"
          v-model="email"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        /><br />
        <label for="password">Password</label><br />
        <input
          type="password"
          v-model="password"
          class="form-control"
          placeholder="Password"
          required
        /><br />
        <button
          class="w-100 btn btn-lg btn-primary"
          id="btn-signup"
          @click.prevent="signup"
          type="submit"
        >
          Join</button
        ><br />
        <hr />
      </form>
      <div>
          <h4>Already have account? Click Login</h4>
          <router-link
              class="btn btn-sm btn-outline-success"
              to="/login"
            >
              Login
            </router-link>
      </div>
    </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
export default {
    // components: {
    //   Navbar
    // },
    data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
      signup () {
        this.$store.dispatch("register", {
          email: this.email,
          password: this.password,
          router: this.$router
          })
        },
  }, 
}
</script>

<style>

</style>