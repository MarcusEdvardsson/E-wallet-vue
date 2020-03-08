<template>
  <section>
    <Top header="ADD A NEW BANK CARD" />
    <transition name="slide-left-centered">
      <Card :input="input" v-on="slide" />
    </transition>
    <CardForm @cardInfo="cardInfo" />
    <button
    class="button"
    @click="addCard(); slide = !slide;">
    Add Card</button>
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
      myCards: [],
      slide: true
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

<style scoped>
.button {
  position: absolute;
  bottom: 2rem;
  right: 46%;
}

.slide-left-centered-enter,
.slide-left-centered-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-left-centered-enter-active {
    transition: all .3s ease;
}

.slide-left-centered-leave-active {
    transition: all .5s ease;
}

</style>
