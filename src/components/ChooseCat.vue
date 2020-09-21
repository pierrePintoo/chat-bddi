<template>
  <div>
    <ul>
      <li v-on:click="catColor = 'red'">Red</li>
      <li v-on:click="catColor = 'orange'">Orange</li>
      <li v-on:click="catColor = 'vert'">Vert</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      catColor: ''
    }
  }
}
</script>
