<template>
  <div>
    <Navbar />
    <formLogin />
  </div>
</template>

<script>
import formLogin from "@/components/Login"
import Navbar from "@/components/Navbar"

export default {
    name: "Login",
    components: {
        formLogin,
        Navbar
    }
}
</script>

<style>

</style>
