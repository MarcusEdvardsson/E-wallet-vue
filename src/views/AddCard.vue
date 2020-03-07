<template>
  <section>
    <Top header="ADD A NEW BANK CARD" />
    <Card :input="input" />
    <CardForm @cardInfo="cardInfo" />
    <button
    class="button"
    @click="addCard">Add Card</button>
  </section>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
export default {
  name: 'AddCard',
  components: {
    Top,
    Card,
    CardForm
  },
  data: () => {
    return {
      input: {},
      myCards: []
    }
  },
  methods: {
    addCard () {
      if (localStorage.getItem('cards')) {
        this.myCards = JSON.parse(localStorage.getItem('cards'))
        this.myCards.push(this.input)
        localStorage.setItem('cards', JSON.stringify(this.myCards))
      } else {
        this.myCards.push(this.input)
        localStorage.setItem('cards', JSON.stringify(this.myCards))
      }
      this.$router.push('/')
    },
    cardInfo (input) {
      this.input = input
    }
  }
}
</script>
