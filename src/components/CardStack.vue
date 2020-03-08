<template>
  <section class="cards">
    <div class="stacked" v-for="(card, index) in cards" :key="index" @click="changeCard(index)">
      <Card :input="card" />
    </div>
  </section>
</template>
<script>
import Card from './Card'
export default {
  name: 'CardStack',
  props: {
    cards: Array
  },
  components: {
    Card
  },
  methods: {
    changeCard (index) {
      this.$emit('changeCard', index)
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stacked {
  border: 1px solid pink;
}

.stacked:nth-child(n){
  border: 5px solid black;
  transform: translateY(-2rem);
}
</style>
