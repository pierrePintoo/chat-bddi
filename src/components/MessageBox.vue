<template>
      <form @submit.prevent="onSubmit" class="message-box__form">
          <!-- <p v-if="this.store.typing" class="when-is-typing">{{ this.store.whoIsTyping.username }} is typing...</p> -->
          <input ref="input" class="message-box__input" @keyup="isTyping" v-model="message" type="text" placeholder="Tapotttttte chur ton clavier ichi...">
          <!-- <Emoji @click="selectedEmoji"/> -->
          <button class="message-box__btn"><img src="../assets/patte.svg"></button>
      </form>
</template>

<script>
import store from '../store'
require('vue-chat-emoji/dist/vue-chat-emoji.css')

export default {
  data () {
    return {
      message: '',
      textArray: ''
    }
  },
  methods: {
    isLastIndexOF (arrayLength, el) {
      if (arrayLength - 1 === this.textArray.indexOf(el)) {
        return true
      } else {
        return false
      }
    },
    isTyping () {
      this.$emit('typing', {
        user: store.user,
        typing: true
      })
    },
    isNotTyping () {
      this.$emit('typing', {
        user: store.user,
        typing: false
      })
    },
    tranform () {
      this.textArray = this.message.split('')
      const lengthTextArray = this.textArray.length
      for (let i = 0; i < this.textArray.length; i++) {
        console.log(this.textArray[i] + ' : ' + this.isLastIndexOF(lengthTextArray, this.textArray[i]))
        if (this.isLastIndexOF(lengthTextArray, this.textArray[i]) === false) {
          switch (this.textArray[i]) {
            case 's':
            case 'j':
            case 'ss':
            case 'ç':
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
      this.message = this.textArray.join('')
    },
    onSubmit () {
      this.tranform()
      this.$emit('sendMessage', this.message)
      this.message = ''
    },
    selectedEmoji (args) {
      console.log(args)
      this.$refs.input.value = args.emoji
    }
  }
}
</script>

<style>
.message-box__form{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.message-box__input{
    width: 100%;
    height: 50%;
    align-self: center;
    font-size: 15PX;
    background: none;
    border: none;
    border-radius: 30px;
    background-color: #141414;
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
    color: white;
    padding-left: 4%;
    margin-left: 2%;
}

.message-box__btn{
    width: 15%;
    height: 60%;
    border: none;
    background-color: #181818;
    color: white;
    border-radius: 30px;
    transition: transform 0.2s ease-in-out;
}

.message-box__btn:hover{
  transform: scale(1.5);
  cursor: pointer;
}

.when-is-typing{
  position: absolute;
}

</style>
