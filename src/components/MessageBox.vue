<template>
        <form @submit.prevent="onSubmit" class="message-box__form">
            <input ref="input" class="message-box__input" v-model="message" type="text" placeholder="Tapotttttte sur ton clavier ici..."> 
            <!-- <Emoji @click="selectedEmoji"/> -->
            <button class="message-box__btn">Send</button>
        </form>
</template>

<script>
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
      if(arrayLength - 1 == this.textArray.indexOf(el)) {
        return true
      } else {
        return false
      }
    },
    tranform () {
      this.textArray = this.message.split('')
      let lengthTextArray = this.textArray.length;
      for (let i = 0; i < this.textArray.length; i++) {
        console.log(this.textArray[i] + ' : ' + this.isLastIndexOF(lengthTextArray, this.textArray[i]))
        if(this.isLastIndexOF(lengthTextArray, this.textArray[i]) == false) {
          switch(this.textArray[i]) {
            case 's':
            case 'j':
            case 'ss':
            case 'ç':
              this.textArray[i] = 'ch'
              break;
            case 'm':
              this.textArray[i] = 'mi'
              break;
            case 'S':
            case 'J':
            case 'SS':
              this.textArray[i] = 'Ch'
              break;
            case 'r':
              this.textArray[i] = 'rrrr'          
              break;
            case 'R':
              this.textArray[i] = 'RRRR'
              break;  
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
    width: 70%;
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
    width: 20%;
    height: 50%;
    border: none;
    background-color: black;
    color: white;
    border-radius: 30px;
    margin-right: 6.6%;
}

</style>
