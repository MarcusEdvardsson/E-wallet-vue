<template>
  <div class="card">
    <img src="../assets/chip-dark.svg">
    <div v-bind:key='card.cardid' v-for='card in cards'>
      <p>{{ card.cardname }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['cards']
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
