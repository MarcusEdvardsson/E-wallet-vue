<template>
  <div class="home">
    <Top msg="E-WALLET"/>
    <Card />
    <CardStack />
    <router-link to="/AddCard" class="button">Add a new card</router-link>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'
export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack
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
