<template>
    <div>
        <ul>
            <MessagesListMessage
                v-for="(message, i) in messages"
                    :key="i"
                    :message="message"
            />
        </ul>
    </div>
</template>

<script>
import MessagesListMessage from "./MessagesListMessage"
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