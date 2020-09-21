<template>
    <div id="app" style="height: initial;">
        <lottie :options="defaultOptions" height="100%" width="100%" v-on:animCreated="handleAnimation"/>
    </div>
</template>

<script>
import Lottie from 'vue-lottie'
import * as animationData from '@/assets/cat-for-appear.json'

export default {
  name: 'app',
  components: {
    lottie: Lottie
  },
  data () {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },

    stop: function () {
      this.anim.stop()
    },

    play: function () {
      this.anim.play()
    },

    pause: function () {
      this.anim.pause()
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed)
    }
  }
}
</script>

<style>

</style>
