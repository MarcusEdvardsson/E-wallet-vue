<template>
  <div class="about">
    <Top msg="ADD A NEW BANK CARD"/>
    <Card :card="card" />
    <CardForm :input="card" />
    <router-link to="/" class="button">Add card</router-link>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardForm from '@/components/CardForm.vue'
export default {
  name: 'AddCard',
  props: {},
  components: {
    Top,
    Card,
    CardForm
  },
  data: () => {
    return {
      card: {
        cardNumber: '',
        cardHolder: null,
        valYear: '',
        ccv: null,
        vendor: { color: '', name: '', logo: '' }
      }
    }
  }
}
</script>

<style scoped>
.about {
  height: 100vh;
  max-width: 100%;
  padding: 0rem 20%;
}
.button {
  padding: 1rem 7rem;
  background: black;
  color: white;
}
</style>
