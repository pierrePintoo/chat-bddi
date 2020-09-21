<template style="height: 100%">
    <div class="login">
        <div class="error" v-if="error">
            {{ error.message }}
        </div>
        <transition name="fade">
          <form class="form-login" v-if="showForm" @submit.prevent="onSubmit">
              <img src="../assets/new-logo.svg" alt="logo-chat">
              <label class="form-login__label">Chalut, che ici que tu rentreras ton nom de chat</label>
              <input class="form-login__input" v-model="username">
              <button class="form-login__btn">Connechion</button>
          </form>
        </transition>
        <LottieAnimation class="login-animation"/>
    </div>
</template>

<script>
import store from '../store.js'
import LottieAnimation from '../components/LottieAnimation.vue'
export default {
  data () {
    return {
      username: '',
      error: store.error,
      showForm: false,
      usernameChat: ''
    }
  },
  components: {
    LottieAnimation
  },
  methods: {
    isLastIndexOF (arrayLength, el) {
      if (arrayLength - 1 === this.usernameChat.indexOf(el)) {
        return true
      } else {
        return false
      }
    },
    /* transformText (text) {
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
    }, */
    onSubmit () {
      console.log('Avant transform : ' + this.username)
      this.usernameChat = this.username.split('')
      const lenghtArrayUsernameChat = this.usernameChat.length
      for (let i = 0; i < this.usernameChat.length; i++) {
        console.log(this.usernameChat[i] + ' : ' + this.isLastIndexOF(lenghtArrayUsernameChat, this.usernameChat[i]))
        if (this.isLastIndexOF(lenghtArrayUsernameChat, this.usernameChat[i]) === false) {
          switch (this.usernameChat[i]) {
            case 's':
            case 'j':
            case 'ss':
              this.usernameChat[i] = 'ch'
              break
            case 'm':
              this.usernameChat[i] = 'mi'
              break
            case 'S':
            case 'J':
            case 'SS':
              this.usernameChat[i] = 'Ch'
              break
            case 'r':
              this.usernameChat[i] = 'rrrr'
              break
            case 'R':
              this.usernameChat[i] = 'RRRR'
              break
          }
        }
      }
      store.userRegister(this.username)
      this.username = ''
      // console.log(this.usernameChat.join(''))
      this.username = this.usernameChat.join('')
      // this.transformText(this.username)
    },
    showFormToggle () {
      setTimeout(() => {
        this.showForm = true
      }, 500)
    }
  },
  mounted () {
    this.showFormToggle()
  }
}
</script>
<style>
.login{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 100px;
}

.form-login{
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 23%;
  justify-content: space-between;
}

.form-login__label{
  grid-area: label;
}

.login-animation{
  position: absolute;
  right: -80px;
  bottom: -10px;
  }

.form-login__input{
  grid-area: input;
  color: #141414;
  height: 58px;
  font-size: 15px;
  border:none;
  background: rgba(233, 184, 67, 0.3);
  transition: all .2s ease-in-out;
  border-radius: 18px;
  padding-left: 15px;
}

.form-login__btn{
  font-size: 14px;
  grid-area: button;
  background: #141414;
  color: rgb(255, 217, 0);
  border-radius: 50px;
  border: none;
  height: 45px;
  width: 50%;
  align-self: center;
  transition: all .5s ease;
}

.form-login__btn:hover{
  width: 60%;
  cursor: pointer;
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
