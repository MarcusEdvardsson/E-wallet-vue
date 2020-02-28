<template>
  <div class="about">
    <Top msg="ADD A NEW BANK CARD"/>
    <Card :cards=cards />
    <CardForm />
    <router-link to="/" class="button">Add card</router-link>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardForm from '@/components/CardForm.vue'
export default {
  name: 'AddCard',
  props: ['cards'],
  components: {
    Top,
    Card,
    CardForm
  }
}
</script>

<style scoped>
.button {
  padding: 1rem 7rem;
  background: black;
  color: white;
}
</style>
