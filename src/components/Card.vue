<template>
  <div class="card">
    <img src="../assets/chip-dark.svg">
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {
  },
  created () {
    this.$eventBus.$on('send-data', (data) => {
      // do something with the data
    });
  }
}
</script>

<style scoped>
.card {
  height: 241px;
  width: 382px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}

.chip {
  height: 50px;
  width: 50px;
  border: 1px solid black;
}
</style>
