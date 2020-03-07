<template>
  <div class="home">
    <Top header="E-WALLET" />
    <Card :input="input" />
    <CardStack
    :cards="myCards"
    @changeCard="changeCard" />
    <button class="button remove" @click="deleteCard">Delete Card</button>
    <button class="button" @click="addCard">Add A Card</button>
  </div>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardStack from '../components/CardStack'
export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack
  },
  data: () => {
    return {
      input: {},
      cards: localStorage.getItem('cards'),
      myCards: []
    }
  },
  methods: {
    addCard () {
      this.$router.push('/AddCard')
    },
    deleteCard () {
      const index = this.myCards.findIndex(i => i.nrInput === this.input.nrInput)
      this.myCards.splice(index, 1)
      localStorage.setItem('cards', JSON.stringify(this.myCards))
      this.input = {}
      localStorage.setItem('activeCard', JSON.stringify(this.input))
    },
    changeCard (index) {
      this.input = this.myCards[index]
      localStorage.setItem('activeCard', JSON.stringify(this.input))
    }
  },
  watch: {
    cards () {
      this.myCards = JSON.parse(localStorage.getItem('cards'))
    }
  },
  mounted () {
    if (localStorage.getItem('cards')) {
      this.myCards = JSON.parse(localStorage.getItem('cards'))
    } else {
      localStorage.setItem('cards', JSON.stringify(this.myCards))
    }
    if (localStorage.getItem('activeCard')) {
      this.input = JSON.parse(localStorage.getItem('activeCard'))
    }
  }
}
</script>
