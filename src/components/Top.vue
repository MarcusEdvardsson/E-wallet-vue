<template>
  <section class="top">
    <h1 class="header">{{ header }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Top',
  props: {
    header: String,
    current: String
  }
}
</script>

<style scoped>
.top {
  height: 7.75rem;
  font-family: "Source Sans Pro";
}
.header {
  font-size: 2rem;
  height: 7rem;
  margin-top: 3.5rem;
  font-weight: bold;
}
</style>
