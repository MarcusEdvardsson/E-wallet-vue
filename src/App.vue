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
  position: absolute;
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
</style>
