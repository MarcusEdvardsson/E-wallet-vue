<template>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'Top',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  h1 {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 100%;
  }
</style>
