<template>
  <section>
    <article :class="['cards', vendor]">
      <div class="icons">
        <img :src="require(`../assets/chip-dark.svg`)" alt />
      </div>
      <p class="numbers">{{nrInput}}</p>
      <section class="footer">
        <div class="name">
          <p class="cardInfo">Cardholder</p>
          <p class="option">{{nameInput}}</p>
        </div>
        <div class="valid">
          <p class="cardInfo">Valid thru</p>
          <p class="optionValid">{{validInput}}</p>
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
    nrInput () {
      if (!this.input.nrInput) {
        const unSet = 'XXXX XXXX XXXX XXXX'
        return unSet
      } else {
        let nrInput = this.input.nrInput
        nrInput = nrInput.match(/.{1,4}/g)
        return nrInput.join(' ')
      }
    },
    nameInput () {
      if (!this.input.nameInput) {
        const unSet = 'Firstname Lastname'
        return unSet
      } else {
        return this.input.nameInput
      }
    },
    validInput () {
      if (!this.input.validInput) {
        const unSet = 'XX/XX'
        return unSet
      } else {
        return this.input.validInput
      }
    },
    vendor () {
      if (!this.input.vendorInput) {
        return this.defaultImg
      } else {
        const vendor = this.input.vendorInput
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
  font-family: "PT Mono";
  background: #d0d0d0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}
.bitcoin {
  background: #ffae34;
  color: black;
}
.evil {
  background: #f33355;
  color: white;
}
.blockchain {
  background: #8b58f9;
  color: white;
}
.ninja {
  background: #222222;
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
  width: 5rem;
}
.cardInfo {
  font-size: 0.75rem;
}
.option {
  font-size: 1.125rem;
  width: 15rem;
}
.optionValid {
  font-size: 1.125rem;
  background: none;
  border: none;
  outline: none;
}
</style>
