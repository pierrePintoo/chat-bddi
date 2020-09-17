<template class="liste-messages">
    <li v-if="isCurretUser">
      <div class="liste-message__message--current">
        <div class="liste-message__message__bulle">
          <strong class="username username--current" v-if="isCurretUser">{{ message.user.username }} :</strong>
          <em class="username username--current" v-else>{{ message.user.username }} :</em>
          <br>
          <div class="bulle bulle--current-user">
            <span class="bulle__text"> {{ message.text }}</span>
          </div>
        </div>  
          <img class="list_message__message__avatar" src="../assets/chat-avatar.svg">  
      </div>      
    </li>
    <li v-else>
      <div class="liste-message__message">
          <img class="list_message__message__avatar" src="../assets/chat-avatar.svg">
          <strong class="username" v-if="isCurretUser">{{ message.user.username }} :</strong>
          <em class="username" v-else>{{ message.user.username }} :</em>
          <br>
          <div class="bulle bulle--others">  
            <span class="bulle__text"> {{ message.text }}</span>
          </div>
      </div>
    </li>
</template>

<script>
// import MessagesList from './MessagesList'
import store from '../store'
export default {
  computed: {
    isCurretUser () {
      return this.message.user.username === store.$data.user.username
    }
  },
  props: {
    message: {
      type: Object,
      require: true
    }
  },
}
</script>

<style scoped>
  .liste-message__message__bulle{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .liste-message__message{
    margin: 13px 0 0 40px;
    display: grid;
    grid-template-columns: 10% 40%;
  }

  .liste-message__message--current{
    margin: 13px 40px 0 0;
    display: grid;
    grid-template-columns: 40% 10%;
  }

  .bulle--current-user{
    align-self: flex-end;
  }

  .bulle--current-user{
    text-align: right;
  }

  .bulle{
    position: relative;
    width: 50%;
    max-width: 50%;
  }

  /*.bulle::after{
    content: '';
    position: absolute;
    transform-origin: top left;
    right: 100%;
    top: -10%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: url('../assets/chat-avatar.svg');
    background-size: 90%;
    background-position: 50% 110%;
    background-color: rgb(255, 217, 0);
    background-repeat: no-repeat;
  }*/

  .username{
    font-size: 14px;
    color: rgb(255, 217, 0);
    font-style: initial;
    font-family: "CarmenSemiBold", Arial, Helvetica;
  }

  .bulle__text{
    font-size: 15px;
    word-break: break-all;
  }
</style>
