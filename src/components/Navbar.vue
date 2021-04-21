<template>
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">TOKO BERAS</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link class="nav-link" href="#">Category</router-link>
      </li> -->
      <li class="nav-item">
        <router-link class="nav-link" v-if="login" to="/cart">Cart</router-link>
      </li>
    </ul>
    <span class="navbar-text mr-2">
      Hallo User 
    </span>
    <router-link class="btn btn-success" to="/login" v-if="!login"
          >Login</router-link
        >
    <button class="btn btn-danger" @click.prevent="logout" v-else>
          Logout
        </button>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      login: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      this.$router.push("/login");
    },
    checkLogin () {
        if (localStorage.getItem('access_token')) {
            this.login = true
        } else {
            this.login = false
        }
    }
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style>
</style>