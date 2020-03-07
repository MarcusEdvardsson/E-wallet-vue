<template>
  <div id="app">
    <router-view class="container" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Mono|Source+Sans+Pro&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-variant: small-caps;
}

#app {
  font-family: 'PT Mono';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 110vh;
  display: flex;
  justify-content: center;
  background: white;
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
}

.button {
  width: 24rem;
  height: 5rem;
  border: 1px solid #000000;
  background: white;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 900;
  position: absolute;
  bottom: 3rem;
}
.remove {
  bottom: 8.5rem;
}
</style>
