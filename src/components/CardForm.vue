<template>
  <form @input="cardInfo" class="cardform">
    <div>
        <label for="cardNumber">Card Number</label>
        <input
            type="text"
            id="cardNumber"
            placeholder="XXXX XXXX XXXX XXXX"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'XXXX XXXX XXXX XXXX'"
            v-model="input.nrInput"
            maxlength="16"
            @input="validateNumber"/>
    </div>
    <label for="cardName">Cardholder Name</label>
    <input
      type="text"
      id="cardName"
      placeholder="Cardholder Name"
      onfocus="this.placeholder = ''"
      onblur="this.placeholder = 'Cardholder Name'"
      v-model="input.nameInput"
      maxlength="22"
      @input="validateName"/>

    <section class="sides">
      <div>
        <label for="validInput">Valid</label>
        <input
          type="text"
          id="validInput"
          placeholder="XX/XX"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'XX/XX'"
          v-model="input.validInput"
          maxlength="5"
          @input="validateValid"/>
      </div>

      <div>
        <label for="cvcInput">CvC</label>
        <input
          type="text"
          id="cvcInput"
          placeholder="XXX"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'XXX'"
          v-model="input.cvcInput"
          maxlength="3"
          @input="validateCvc"/>
      </div>

    </section>
        <label for="vendor">VENDOR</label>
        <select name id="vendor" v-model="input.vendorInput" @input="validateVendor">
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
        nrInput: '',
        nameInput: '',
        validInput: '',
        cvcInput: '',
        vendorInput: '',
        isValid: false
      },
      cardInput: {
        validNumber: false,
        validName: false,
        validValid: false,
        validCvc: false,
        validVendor: true
      }
    }
  },
  methods: {
    cardInfo () {
      const isTrue = Object.keys(this.cardInput).every(
        key => this.cardInput[key] === false
      )
      if (isTrue === true) {
        const isEmpty = Object.keys(this.input).some(key => this.input[key] === '')
        if (isEmpty === false) {
          this.input.isValid = true
        }
      }
      this.$emit('cardInfo', this.input)
    },
    validateNumber () {
      if (
        this.checkNumber(this.input.nrInput) === true ||
        this.input.nrInput === ''
      ) {
        this.cardInput.validNumber = false
      } else {
        this.cardInput.validNumber = true
      }
    },
    validateName () {
      if (this.checkName(this.input.nameInput) === true) {
        this.cardInput.validName = false
      } else {
        this.cardInput.validName = true
      }
    },
    validateValid () {
      if (this.checkValid(this.input.validInput) === true) {
        this.cardInput.validValid = false
      } else {
        this.cardInput.validValid = true
      }
    },
    validateCvc () {
      if (this.checkCvc(this.input.cvcInput) === true) {
        this.cardInput.validCvc = false
      } else {
        this.cardInput.validCvc = true
      }
    },
    validateVendor () {
      this.cardInput.validVendor = false
    },
    checkNumber (nrInput) {
      const pattern = /^[0-9]{16}/
      return pattern.test(nrInput)
    },
    checkName (nameInput) {
      const pattern = /^[a-zA-Z]+ [a-zA-Z]+$/
      return pattern.test(nameInput)
    },
    checkValid (validInput) {
      const pattern = /^(0[1-9]|1[012])\/\d{2}$/
      return pattern.test(validInput)
    },
    checkCvc (cvcInput) {
      const pattern = /^[0-9]{3}/
      return pattern.test(cvcInput)
    }
  }
}
</script>

<style scoped>
</style>
