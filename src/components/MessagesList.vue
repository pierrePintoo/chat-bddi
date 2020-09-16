<template>
    <div>
        <ul ref="">
            <MessagesListMessage
                v-for="(message, i) in messages"
                    :key="i"
                    :message="message"/>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import MessagesListMessage from "./MessagesListMessage"
Vue.use(VueChatScroll)

export default {
    props:{
        messages: {
            type: Array
        }
    },
    components: {
        MessagesListMessage
    }
}
</script>