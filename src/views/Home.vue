<template>
  <div class="home">
    <Top header="E-WALLET" />
    <Card :input="input" />
    <CardStack
    :cards="allCards"
    @changeCard="changeCard" />
    <button class="button remove" @click="deleteCard">DELETE CARD</button>
    <button class="button" @click="addCard">ADD A NEW CARD</button>
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
      allCards: []
    }
  },
  methods: {
    addCard () {
      this.$router.push('/AddCard')
    },
    deleteCard () {
      const index = this.allCards.findIndex(i => i.nrInput === this.input.nrInput)
      this.allCards.splice(index, 1)
      localStorage.setItem('cards', JSON.stringify(this.allCards))
      this.input = {}
      localStorage.setItem('activeCard', JSON.stringify(this.input))
    },
    changeCard (index) {
      this.input = this.allCards[index]
      localStorage.setItem('activeCard', JSON.stringify(this.input))
    }
  },
  watch: {
    cards () {
      this.allCards = JSON.parse(localStorage.getItem('cards'))
    }
  },
  mounted () {
    if (localStorage.getItem('cards')) {
      this.allCards = JSON.parse(localStorage.getItem('cards'))
    } else {
      localStorage.setItem('cards', JSON.stringify(this.allCards))
    }
    if (localStorage.getItem('activeCard')) {
      this.input = JSON.parse(localStorage.getItem('activeCard'))
    }
  }
}
</script>
