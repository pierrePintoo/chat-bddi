import Vue from 'vue'
import io from 'socket.io-client' // lien/pont qu'on va créer avec le serveur
import router from './router' // check direct le index.js

const socket = io('https://bddi-2019-chat.herokuapp.com/')

const COLORS = ['green', 'red', 'blue']
const store = new Vue({
  data: {
    isRegistered: false,
    error: null,
    user: {},
    users: [],
    messages: [],
    listeMessages: null,
    firstTime: true,
    colors: {}
  },

  methods: {
    generateRandomColor () {
      return COLORS[Math.floor(Math.random() * COLORS.length)]
    },
    registerListerners () {
      socket.on('connect', () => {
        console.log('Bien connecté')
        console.log(this.isRegistered)
        const session = sessionStorage.getItem('user')

        if (session) {
          store.userRegister(JSON.parse(session).username)
        }
      })

      socket.on('users update', ({ users, user, type }) => {
        this.users = users
        if (this.users.length > 0) {
          if (type === 'join') {
            // attribuer un avatar random
            this.colors[user.username] = this.generateRandomColor()
          } else {
            delete this.colors[user.username]
          }
        } else {
          this.users.forEach(user => {
            this.colors[user.username] = this.generateRandomColor()
          })
        }
        this.users = users
      })

      socket.on('user registered', (user) => {
        this.isRegistered = true
        this.error = null
        this.user = user
        sessionStorage.setItem('user', JSON.stringify(user))
        console.log(sessionStorage.setItem('user', JSON.stringify(user)))
      })

      socket.on('user update', (infos) => {
        console.log(infos)
      })

      socket.on('messages update', ({ messages }) => {
        this.messages = messages
      })

      socket.on('message new', ({ message }) => {
        this.messages.push(message)
      })

      socket.on('chat error', (error) => {
        this.error = error
      })

      socket.on('user typing', (data) => {
      })

      // socket.connect
    },

    userRegister (username) {
      const avatar = 'https://giphy.com/gifs/l1Zy8CNkQTc8V8LpPH/html5'
      socket.emit('user register', { username, avatar })
    },
    userTyping (data) {
      socket.emit('user typing', data)
    },
    messageNew (message) {
      socket.emit('message new', message)
    },
    logout () {
      console.log('test')
      sessionStorage.clear()
      socket.disconnect()
      router.push('/login')
    }
  },
  watch: {
    isRegistered (registered) {
      if (registered) {
        router.push('/')
      } else {
        router.push('/login')
      }
    }
  },
  created () {
    this.registerListerners()
    console.log(this.avatars)
  }
})

export default store
