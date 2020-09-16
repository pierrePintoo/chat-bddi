<template>
        <form @submit.prevent="onSubmit" class="message-box__form">
            <input class="message-box__input" v-model="message" type="text">
            <button class="message-box__btn">Send</button>
        </form>
</template>

<script>
export default {
    data(){
        return {
            message: ''
        }
    },
    methods: {
        onSubmit(){
            this.$emit('sendMessage', this.message)
            this.message = ''
        }
    }
}
</script>

<style>
.message-box__input{
    width: 70%;
    font-size: 1.2em;
    background: none;
    border: none;
    border-bottom: solid 1px black;
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out
}

.message-box__input:focus{
    border-bottom: solid 3px black;
}

.message-box__btn{
    width: 20%;
    border: none;
    background-color: black;
    color: white;
    margin-right: 4%;
    border-radius: 7px;
}
.message-box__form{
    display: flex;
    justify-content: space-between;
}
</style>