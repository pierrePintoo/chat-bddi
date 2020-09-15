<template>
    <div>
        <MessageBox @sendMessage="onSendMessage"/>
        <MessagesList :messages="messages"/>
        <UsersList :users="users"/>
    </div>
</template>

<script>
import MessageBox from '../components/MessageBox.vue'
import MessagesList from '../components/MessagesList.vue'
import UsersList from '../components/UsersList.vue'

export default {
    data (){
        return {
            users: [
                { name : 'Pierre'},
                { name : 'Paul'},
                { name : 'Jacques'},
            ],
            messages: [
                {user : { name: 'Pierre'}, text: 'Wesh les potos'},
                {user : { name: 'Paul'}, text: 'Yo, ça va ?'}
            ]
        }
    },
    methods:{
        onSendMessage(text){
            this.messages.push({
                user: {name: 'Pierre'}, text
            })
        }
    },
    components:{
        MessageBox,
        MessagesList,
        UsersList
    }
}
</script>