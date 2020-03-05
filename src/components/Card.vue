<template>
  <div class="card">
    <img src="../assets/img/chip-dark.svg">
    <img class="card-logo" :src="card.vendor.logo">
    <p>{{ card.cardName }}</p>
    <p>1234 5678 9101</p>
    <p>02/12</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object
  },
  computed: {
  }
}
</script>

<style scoped>
.card {
  height: 241px;
  width: 382px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background: linear-gradient(237.75deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%), #D0D0D0;
}

</style>
