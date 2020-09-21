<template>
    <div class="chat-page">
        <UsersList class="users-list" :users="store.users"/>
        <MessagesList class="messages-list" :name="this.name" :messages="store.messages"/>
        <MessageBox @typing="onTyping" class="message-box" @sendMessage="onSendMessage"/>
    </div>
</template>

<script>
import MessageBox from '../components/MessageBox.vue'
import MessagesList from '../components/MessagesList.vue'
import UsersList from '../components/UsersList.vue'
import store from '../store'
export default {
  data () {
    return {
      store,
      messages: {},
      name: ''
    }
  },
  methods: {
    onSendMessage (text) {
      store.messageNew(text)
    },
    onTyping (data) {
      this.store.userTyping(data)
    }
  },
  components: {
    MessageBox,
    MessagesList,
    UsersList
  }
}
</script>

<style>
.chat-page{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 70px 5fr 100px ;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "users-list messages-list"
    "users-list messages-list"
    "users-list message-box";
}

.header{
    grid-area: header;
    width: 100%;
    height: 100%;
}

.users-list{
    grid-area: users-list;
    width: 100%;
    height: 100%;
}

.messages-list{
    grid-area: messages-list;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: #181818;
    color: white;
    font-size: 15px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    letter-spacing: 1px;
}

.message-box{
    grid-area: message-box;
    width: 100%;
    height: 100%;
    background-color: #181818;
    color: white;
}

.messages-list > li:nth-child(odd) > div{
  flex-direction: row-reverse;
  text-align: right;
}

.messages-list > li:nth-child(odd) > .liste-message__message .bulle {
  margin-right: 4%;
}

</style>
