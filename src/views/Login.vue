<template>
    <div>
        <div class="error" v-if="error">
            {{ error.message }}
        </div>
        <form @submit.prevent="onSubmit">
            <input v-model="username">
            <button>Login</button>
        </form>
    </div>
</template>

<script>
import store from '../store.js'
export default {
    data () {
        return {
            username: '',
            error: store.error
        }
    },
    methods:{
        onSubmit () {
            store.userRegister(this.username)
            this.username = ''
            console.log(store.isRegistered)
        }
    }
}
</script>