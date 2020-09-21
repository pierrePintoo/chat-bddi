<template class="liste-messages">
    <li v-if="isCurretUser">
      <div class="liste-message__message">
          <img class="list_message__message__avatar avatar-current" src="../assets/avatar-cat.svg">
          <div class="bulle bulle--current">
            <strong class="username username--current">{{ message.user.username }} :</strong>
            <span ref="messageRecu" class="bulle__text bulle__text--current"> {{ message.text }}</span>
          </div>
      </div>
    </li>
    <li v-else>
      <div class="liste-message__message">
          <img class="list_message__message__avatar" src="../assets/avatar-cat.svg">
          <div class="bulle bulle--others">
            <strong class="username">{{ name }}<span class="alias"> alias {{ message.user.username }} :</span></strong>
            <span ref="messageRecu" class="bulle__text"> {{ message.text }}</span>
          </div>
      </div>
    </li>
</template>

<script>
// import MessagesList from './MessagesList'
import store from '../store'
export default {
  data () {
    return {
      names: ['Pitchoune', 'Choupette', 'Mimine', 'Chatoune', 'Minouche'],
      name: ''
    }
  },
  computed: {
    isCurretUser () {
      return this.message.user.username === store.$data.user.username
    },
    color () {
      return store.colors[this.message.user.username]
    }
  },
  props: {
    message: {
      type: Object,
      require: true
    }
  },
  methods: {
    getRandomNames () {
      this.name = this.names[Math.floor(Math.random() * Math.floor(this.names.length))]
    },
    isLastIndexOF (arrayLength, el) {
      if (arrayLength - 1 === this.textArray.indexOf(el)) {
        return true
      } else {
        return false
      }
    },
    transform () {
      console.log('msg reçu' + this.message.text)
      this.textArray = this.message.text.split('')
      const lengthTextArray = this.textArray.length
      for (let i = 0; i < this.textArray.length; i++) {
        console.log(this.textArray[i] + ' : ' + this.isLastIndexOF(lengthTextArray, this.textArray[i]))
        if (this.isLastIndexOF(lengthTextArray, this.textArray[i]) === false) {
          switch (this.textArray[i]) {
            case 's':
            case 'j':
            case 'ss':
            case 'ç':
            case 'c\'':
              this.textArray[i] = 'ch'
              break
            case 'm':
              this.textArray[i] = 'mi'
              break
            case 'S':
            case 'J':
            case 'SS':
              this.textArray[i] = 'Ch'
              break
            case 'r':
              this.textArray[i] = 'rrrr'
              break
            case 'R':
              this.textArray[i] = 'RRRR'
              break
          }
        }
      }
      this.message.text = this.textArray.join('')
    }
  },
  created () {
    // this.tranform()
    this.getRandomNames()
  },
  mounted () {
    this.transform()
  }
}
</script>

<style scoped>
  .avatar-current{
    background-color: yellow
  }

  .alias{
    color: white;
    font-family: "Carmen";
    opacity: .6;
  }
  .liste-message__message{
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
  }

  .liste-message__message:nth(2n){
    flex-direction: row-reverse;
  }

  .list_message__message__avatar{
    background-size: 2em;
    background-color: rgb(255, 217, 0);
    border-radius: 50%;
    max-height: 45px;
  }

  .bulle{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    margin-left: 4%;
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
    font-family: "CarmenSemiBold";
  }

  .bulle__text{
    font-size: 15px;
    word-break: break-all;
    text-justify: left;
  }

</style>
