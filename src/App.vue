<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Mono|Source+Sans+Pro&display=swap');
#app {
  font-family: 'PT Mono';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.button {
  padding: 1rem 5rem;
  border: 1px solid black;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 8px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 22px;
  line-height: 25px;
}

.button:visited {
  text-decoration: none;
  color: black;
}
</style>
