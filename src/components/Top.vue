<template>
  <section class="top">
    <h1>{{ header }}</h1>
    <p>{{ current }}</p>
  </section>
</template>

<script>
export default {
  name: 'Top',
  props: { header: String, current: String }
}
</script>

<style scoped>
.top {
  height: 7.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Source Sans Pro";
}
.top h1 {
  font-size: 2rem;
  height: 7rem;
  margin-top: 3.5rem;
}
.top p {
  font-size: 0.7rem;
  color: grey;
}
</style>
