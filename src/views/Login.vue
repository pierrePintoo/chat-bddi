<template>
    <div class="login">
        <PreLoader class="login_preloader end"/>
        <div class="error" v-if="error">
            {{ error.message }}
        </div>
        <transition name="fade">
          <form class="form-login" v-if="showForm" @submit.prevent="onSubmit">
              <label class="form-login__label">Chalut, che ici que tu rentreras ton nom de chat</label>
              <input class="form-login__input" v-model="username">
              <button class="form-login__btn">Login</button>
          </form>
        </transition>
    </div>
</template>

<script>
import store from '../store.js'
import PreLoader from '../components/Preloader.vue'
export default {
  data () {
    return {
      username: '',
      error: store.error,
      showForm: false,
      usernameChat: '',
    }
  },
  methods: {
    isLastIndexOF (arrayLength, el) {
      if(arrayLength - 1 == this.usernameChat.indexOf(el)) {
        return true
      } else {
        return false
      }
    },
    /*transformText (text) {
      let textAarray = text.split('')
      let lengthArrayText = this.textAarray.length
      for (let i = 0; i < text.length; i++) {
        if(this.isLastIndexOF(lengthArrayText, textAarray[i]) == false) {
          switch(textAarray[i]) {
            case 's':
            case 'j':
            case 'ss':
              textAarray[i] = 'ch'
              break;
            case 'm':
              textAarray[i] = 'mi'
              break;
            case 'S':
            case 'J':
            case 'SS':
              textAarray[i] = 'Ch'
              break;
            case 'r':
              textAarray[i] = 'rrrr'          
              break;
            case 'R':
              textAarray[i] = 'RRRR'
              break;  
          }
        }
      }
    },*/
    onSubmit () {
      console.log('Avant transform : ' + this.username)
      this.usernameChat = this.username.split('')
      let lenghtArrayUsernameChat = this.usernameChat.length;
      for (let i = 0; i < this.usernameChat.length; i++) {
        console.log(this.usernameChat[i] + ' : ' + this.isLastIndexOF(lenghtArrayUsernameChat, this.usernameChat[i]))
        if(this.isLastIndexOF(lenghtArrayUsernameChat, this.usernameChat[i]) == false) {
          switch(this.usernameChat[i]) {
            case 's':
            case 'j':
            case 'ss':
              this.usernameChat[i] = 'ch'
              break;
            case 'm':
              this.usernameChat[i] = 'mi'
              break;
            case 'S':
            case 'J':
            case 'SS':
              this.usernameChat[i] = 'Ch'
              break;
            case 'r':
              this.usernameChat[i] = 'rrrr'          
              break;
            case 'R':
              this.usernameChat[i] = 'RRRR'
              break;  
          }
        }
      }
      store.userRegister(this.username)
      this.username = ''
      //console.log(this.usernameChat.join(''))
      this.username = this.usernameChat.join('')
      //this.transformText(this.username)
    },
    showFormToggle () {
      setTimeout(() => {
        this.showForm = true
      }, 4000)
    }
  },
  mounted () {
    this.showFormToggle()
  },
  components: {
    PreLoader
  }
}
</script>
<style>
.login{
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
}

.form-login{
  margin: auto;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
  "label label"
  "input button";
  grid-gap: 30px;
}

.form-login__label{
  grid-area: label;
}

.form-login__input{
  grid-area: input;
  height: 80px;
  font-size: 2em;
  background: none;
  border:none;
  border-bottom: solid 3px black;
  transition: all .2s ease-in-out;
}

.form-login__input:focus{
    outline: none;
    border-bottom: solid 8px black;
}

.form-login__btn{
  font-size: 2em;
  grid-area: button;
  background: black;
  color: rgb(255, 217, 0);
  border-radius: 15px;
  border: none;
}

.login_preloader{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 0.5s ease-in-out;
}

.fade-enter, .fade-leave{
  opacity: 0;
}

</style>
