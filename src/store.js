import Vue from 'vue'
import io, { Socket } from 'socket.io-client' // lien/pont qu'on va créer avec le serveur
import router from './router' //check direct le index.js


const socket = io('https://bddi-2019-chat.herokuapp.com/')



const store = new Vue({
    data: {
        isRegistered: false,
        error: null,
        user: {},
        users: [],
        messages: [],
        listeMessages: null,
        firstTime: true
    },
    methods: {
        registerListerners(){
            socket.on('connect', () => {
                console.log('Bien connecté')
                console.log(this.isRegistered)
                const session = sessionStorage.getItem('user')

                if(session){
                   store.userRegister(JSON.parse(session).username)
                }
            })
            
            socket.on('users update', ({users}) => {
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

            socket.connect
        },
        userRegister(username) {
            socket.emit('user register', { username })
        },
        userTyping () {

        },
        messageNew (message) {
            socket.emit('message new', message)
        },
        logout () {
            sessionStorage.clear()
            socket.disconnect()
            router.push('/login')
        }
    },
    watch: {
        isRegistered(registered){
            if(registered){
                router.push('/')
            } else {
                router.push('/login')
            }
        }
    },
    created () {
        this.registerListerners()
    }
})

export default store