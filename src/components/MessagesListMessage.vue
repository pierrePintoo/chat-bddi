<template>
    <li>
        <strong v-if="message.user.name === 'Pierre'">{{ message.user.name }}:</strong> 
        <em v-else>{{ message.user.name }}:</em>
        {{ message.text }}
        </li>
</template>

<script>
import MessagesList from './MessagesList'
export default {
    props:{
        message: {
            type: Object,
            require: true
        }
    }
}
</script>