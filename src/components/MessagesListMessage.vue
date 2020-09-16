<template>
    <li>
        <strong v-if="isCurretUser">{{ message.user.username }}:</strong>
        <em v-else>{{ message.user.username }}:</em>
        {{ message.text }}
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
  }
}
</script>
