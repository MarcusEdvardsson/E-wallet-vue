<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter">
        <router-view class="container" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      prevHeight: 0
    }
  },
  methods: {
    beforeLeave (element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter (element) {
      const { height } = getComputedStyle(element)

      element.style.height = this.prevHeight

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter (element) {
      element.style.height = 'auto'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Mono|Source+Sans+Pro&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-transform: uppercase;
}

#app {
  font-family: 'PT Mono';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 110vh;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(315deg, #d7e1ec 0%, #ffffff 74%);
}

.container {
  width: 26rem;
  height: 56rem;
  min-height: min-content;
  background: white;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(315deg, #d7e1ec 0%, #ffffff 74%);
}

.button {
  font-family: 'PT Mono';
  box-shadow: 0px 0px 9px -1px #77DF79;
  background-color:#44D362;
  border-radius:42px;
  border:1px solid #98E690;
  cursor:pointer;
  color:#ffffff;
  font-size:17px;
  padding:16px 35px;
  text-decoration:none;
  text-shadow:0px 0px 50px #2f6627;
  position: fixed;
  bottom: 1rem;
  right: 51%;
}

.remove {
  background-color:#fb452b;
  box-shadow: 0px 0px 9px -1px #ff5e46;
  border:1px solid #ff886a;
  text-shadow:0px 0px 50px #fb452b;
  padding:16px 30px;
  bottom: 1rem;
  right: 40%;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
