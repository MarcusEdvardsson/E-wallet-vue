<template>
  <form @input="cardInfo" class="cardform">
    <div class="flex">
      <label for="cardNumber">Card Number</label>
      <input
          type="text"
          id="cardNumber"
          v-model="input.number"
          maxlength="16"
          @input="addNumber"/>
    </div>
    <div class="flex">
      <label for="cardName">Cardholder Name</label>
        <input
          type="text"
          id="cardName"
          placeholder="FIRSTNAME LASTNAME"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Cardholder Name'"
          v-model="input.name"
          maxlength="30"
          @input="addName"/>
    </div>

    <div class="half">
      <div class="flex valid">
        <label for="date">Valid thru</label>
        <input
          type="text"
          id="date"
          placeholder="MM/YY"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'MM/YY'"
          v-model="input.date"
          maxlength="5"
          @input="addDate"/>
      </div>

      <div class="flex ccv">
        <label for="ccv">CCV</label>
        <input
          type="text"
          id="ccv"
          v-model="input.ccv"
          maxlength="3"
          @input="addCcv"/>
      </div>
    </div>
    <div class="flex">
        <label for="vendor">VENDOR</label>
        <select name
        id="vendor"
        v-model="input.vendor"
        @input="addVendor">
            <option value="bitcoin">Bitcoin Inc</option>
            <option value="ninja">Ninja Bank</option>
            <option value="blockchain">Block Chain Inc</option>
            <option value="evil">Evil Corp</option>
        </select>
    </div>
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
      if (this.checkDate(this.input.date) === true) {
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
    addVendor () {
      this.cardInput.thisVendor = false
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
    checkNumber (number) {
      const pattern = /^[0-9]{16}/
      return pattern.test(number)
    },
    checkName (name) {
      const pattern = /^[a-zA-Z]+ [a-zA-Z]+$/
      return pattern.test(name)
    },
    checkDate (date) {
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
.flex {
  display: flex;
  flex-direction: column;
}

.flex label {
  align-self: flex-start;
  font-size: 0.7rem;
}

.flex input {
  width: 382px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  margin: 5px 0px;
  padding: 10px;
}

.flex input::placeholder {
  color: black;
  font-family: 'PT Mono';
  font-size: 1rem;
  font-weight: bold;
}

.flex select {
  width: 382px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  margin: 5px 0px;
}

.half input {
  width: 180px;
}

.half {
  display: flex;
  justify-content: space-between;
}
</style>
