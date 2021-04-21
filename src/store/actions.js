import axios from 'axios'
// const baseURL = 'http://localhost:3000/'
const baseURL = 'https://ecommerce-toko-beras.herokuapp.com/'
import Swal from 'sweetalert2'

export function login({ commit }, { email, password, router }) {
    // console.log(email, passwo rd)
    const data = {
        email,
        password
    }
    axios
        .post(`${baseURL}login`, data)
        .then(res => {
            // console.log(res)
            localStorage.setItem('access_token', res.data.access_token)
            router.push('/')
        })
        .catch(error => console.log(error))
}

export function register({ commit }, { email, password, router }) {
    // console.log(email, password)
    const data = {
        email,
        password
    }
    axios
        .post(`${baseURL}register`, data)
        .then(res => {
            // console.log(res)
            router.push('/login')
            Swal.fire(
                'Success',
                'You may login now with your account',
                'success'
              )
        })
        .catch(error => console.log(error))
}

export function getProducts({ commit }) {
    axios
        .get(`${baseURL}products`, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            // console.log(res.data)
            commit('SET_PRODUCTS', res.data)
        })
        .catch(error => console.log(error))
}

export function addToCart({ commit }, { ProductId }) {
    const newData = {
        ProductId: ProductId
    }
    axios
        .patch(`${baseURL}carts`, newData, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            // console.log('Product has been added to cart')
            Swal.fire(
                'Success',
                'Product has been added to cart',
                'success'
              )
        })
        .catch(error => {
            console.log(error)
        })
}

export function incrementCart({ dispatch }, { id }) {
    const newData = {
        id: id
    }
    axios
        .patch(`${baseURL}carts/plus`, newData, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            dispatch('getCart')
            // console.log('Quantity has been increase from cart')
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

export function decrementCart({ dispatch }, { id }) {
    const newData = {
        id: id
    }
    axios
        .patch(`${baseURL}carts/min`, newData, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            dispatch('getCart')
            // console.log('Quantity has been decrease from cart')
        })
        .catch(error => {
            console.log(error)
        })
}

export function getCart({ commit }) {
    axios
        .get(`${baseURL}carts`, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            commit('SET_CART', res.data)
        })
        .catch(error => console.log(error))
}

export function deleteCart({ dispatch }, { id }) {
    axios
        .delete(`${baseURL}carts/${id}`, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            dispatch('getCart')
            Swal.fire(
                'Success',
                'Product has been deleted from cart',
                'success'
              )
        })
        .catch(error => console.log(error))
}

export function checkoutCart({ dispatch }, { id }) {
    axios
        .patch(`${baseURL}carts/${id}`, id, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            dispatch('getCart')
            Swal.fire(
                'Thank you',
                'Hope you enjoy our services',
                'success'
              )
        })
        .catch(error => console.log(error, "Masuk error sini"))
}