<template>
  <div id="app">
    <router-view :cards=cards />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      cards: [
        {
          cardname: 'Marcus Edvardsson',
          cardnumber: '1234 5678 91011',
          cardvendor: 'Bitcoin INC',
          cardid: 1
        },
        {
          cardname: 'Stefan Isgren',
          cardnumber: '1234 5678 91012',
          cardvendor: 'Ninja Bank',
          cardid: 2
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Mono|Source+Sans+Pro&display=swap');
#app {
  font-family: 'PT Mono';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
