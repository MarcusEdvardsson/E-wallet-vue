<template>
  <section>
    <article :class="['cards', vendor]">
      <div class="icons">
        <img :src="require(`../assets/chip-dark.svg`)" alt />
      </div>
      <p class="numbers">{{number}}</p>
      <section class="footer">
        <div class="name">
          <p class="cardInfo">Cardholder Name</p>
          <p class="option">{{name}}</p>
        </div>
        <div class="valid">
          <p class="cardInfo">Valid thru</p>
          <p class="optionValid">{{date}}</p>
        </div>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    input: Object
  },
  computed: {
    number () {
      if (!this.input.number) {
        const set = 'XXXX XXXX XXXX XXXX'
        return set
      } else {
        let number = this.input.number
        number = number.match(/.{1,4}/g)
        return number.join(' ')
      }
    },
    name () {
      if (!this.input.name) {
        const set = 'Firstname Lastname'
        return set
      } else {
        return this.input.name
      }
    },
    date () {
      if (!this.input.date) {
        const set = 'MM/YY'
        return set
      } else {
        return this.input.date
      }
    },
    vendor () {
      if (!this.input.vendor) {
        return this.defaultImg
      } else {
        const vendor = this.input.vendor
        return vendor
      }
    }
  }
}
</script>

<style>
.cards {
  width: 24rem;
  height: 15rem;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  background: linear-gradient(237.75deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%), #D0D0D0;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
}
.bitcoin {
  background: linear-gradient(237.41deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 99.07%), #FFAE34;
  color: black;
}
.evil {
  background: linear-gradient(237.75deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #F33355;
  color: white;
}
.blockchain {
  background: linear-gradient(238.04deg, rgba(0, 0, 0, 0.15) 1.49%, rgba(0, 0, 0, 0) 100%), #8B58F9;
  color: white;
}
.ninja {
  background: linear-gradient(237.75deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%), #222222;
  color: white;
}
.icons {
  font-size: 2.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.img {
  max-width: 40px;
  max-height: 40px;
}
.numbers {
  font-size: 1.8rem;
  margin: 1rem 0;
  line-height: 2rem;
  letter-spacing: 0.03em;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 3.5rem;
}
.name {
  text-align: left;
}
.valid {
  text-align: right;
}
.cardInfo {
  font-size: 0.75rem;
}

</style>
