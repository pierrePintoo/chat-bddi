<template>
  <transition name="slide">
    <div v-if="show" class="preloader">
      <img rel="img" id="img" :src="require('../assets/Illustration.gif')"/>
    </div>
  </transition>
</template>

<script>
require('../assets/Illustration.gif')
export default {
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.showToggle()
  },
  methods: {
    showToggle () {
      setTimeout(() => {
        this.show = true
      }, 500)
      setTimeout(() => {
        this.show = false
      }, 4000)
    }
  }
}
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all .5s ease;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(200px);
}
</style>
