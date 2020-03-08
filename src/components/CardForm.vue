<template>
  <form @input="cardInfo" class="cardform">
    <div class="flex">
      <label for="cardNumber">Card Number</label>
      <input
          type="text"
          id="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'XXXX XXXX XXXX XXXX'"
          v-model="input.number"
          maxlength="16"
          @input="addNumber"/>
    </div>
    <div class="flex">
      <label for="cardName">Cardholder Name</label>
        <input
          type="text"
          id="cardName"
          placeholder="Cardholder Name"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Cardholder Name'"
          v-model="input.name"
          maxlength="22"
          @input="addName"/>
    </div>
    <div class="half">
      <div class="flex valid">
        <label for="date">Valid</label>
        <input
          type="text"
          id="date"
          placeholder="XX/XX"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'XX/XX'"
          v-model="input.date"
          maxlength="5"
          @input="addDate"/>
      </div>

      <div>
        <label for="ccv">CCV</label>
        <input
          type="text"
          id="ccv"
          placeholder="XXX"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'XXX'"
          v-model="input.ccv"
          maxlength="3"
          @input="addCcv"/>
      </div>

    </div>
        <label for="vendor">VENDOR</label>
        <select name
        id="vendor"
        v-model="input.vendor"
        @input="validateVendor">
            <option value="bitcoin">Bitcoin Inc</option>
            <option value="ninja">Ninja Bank</option>
            <option value="blockchain">Block Chain Inc</option>
            <option value="evil">Evil Corp</option>
        </select>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      input: {
        number: '',
        name: '',
        date: '',
        ccv: '',
        vendor: '',
        valid: false
      },
      cardInput: {
        thisNumber: false,
        thisName: false,
        thisDate: false,
        thisCcv: false,
        thisVendor: true
      }
    }
  },
  methods: {
    addNumber () {
      if (
        this.checkNumber(this.input.number) === true ||
        this.input.number === ''
      ) {
        this.cardInput.thisNumber = false
      } else {
        this.cardInput.thisNumber = true
      }
    },
    addName () {
      if (this.checkName(this.input.name) === true) {
        this.cardInput.thisName = false
      } else {
        this.cardInput.thisName = true
      }
    },
    addDate () {
      if (this.checkValid(this.input.date) === true) {
        this.cardInput.thisDate = false
      } else {
        this.cardInput.thisDate = true
      }
    },
    addCcv () {
      if (this.checkCcv(this.input.ccv) === true) {
        this.cardInput.thisCcv = false
      } else {
        this.cardInput.thisCcv = true
      }
    },
    cardInfo () {
      const isTrue = Object.keys(this.cardInput).every(
        key => this.cardInput[key] === false
      )
      if (isTrue === true) {
        const isEmpty = Object.keys(this.input).some(key => this.input[key] === '')
        if (isEmpty === false) {
          this.input.valid = true
        }
      }
      this.$emit('cardInfo', this.input)
    },
    validateVendor () {
      this.cardInput.thisVendor = false
    },
    checkNumber (number) {
      const pattern = /^[0-9]{16}/
      return pattern.test(number)
    },
    checkName (name) {
      const pattern = /^[a-zA-Z]+ [a-zA-Z]+$/
      return pattern.test(name)
    },
    checkValid (date) {
      const pattern = /^(0[1-9]|1[012])\/\d{2}$/
      return pattern.test(date)
    },
    checkCcv (ccv) {
      const pattern = /^[0-9]{3}/
      return pattern.test(ccv)
    }
  }
}
</script>

<style scoped>
</style>
