<template>
  <div class="home">
    <Top msg="E-WALLET"/>
    <Card :card="card" />
    <CardStack />
    <router-link to="/AddCard" class="button">Add a new card</router-link>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'
import { cards } from '@/storage/localStorage.js'
export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack
  },
  data: () => {
    return {
      cards: cards
    }
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
  max-width: 100%;
  padding: 0rem 20%;
}
</style>
