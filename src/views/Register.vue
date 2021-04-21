<template>
    <div>
    <Navbar />

    <formSignup />
    </div>
</template>

<script>
import formSignup from '@/components/Register'
import Navbar from '@/components/Navbar.vue'
export default {
    name: "Register",
    components: {
        formSignup,
        Navbar
    }
}
</script>

<style>

</style>