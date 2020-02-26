<template>
  <div class="home">
    <Top msg="E-WALLET"/>
    <router-link to="/AddCard" class="button">Add a new card</router-link>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
export default {
  name: 'Home',
  components: {
    Top
  }
}
</script>

<style scoped>

</style>
