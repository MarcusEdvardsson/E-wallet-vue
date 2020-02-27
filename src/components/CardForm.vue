<template>
  <div class="cardform">
    <div class="card-container flex">
        <label for="cardnumber">Card Number</label>
        <input id="cardnumber" type="text" pattern="[0-9]*" inputmode="numeric">
    </div>
        <div class="name-container flex">
        <label for="name">Cardholder Name</label>
        <input id="name" maxlength="20" type="text" v-model="cardholder">
    </div>
    <div class="half">
        <div class="valid-container flex">
            <label for="expirationdate">Valid thru</label>
            <input id="expirationdate" type="text" pattern="[0-9]*" inputmode="numeric">
        </div>
        <div class="ccv-container flex">
            <label for="securitycode">CCV</label>
            <input id="securitycode" type="text" pattern="[0-9]*" inputmode="numeric">
        </div>
    </div>
    <div class="vendor-container flex">
        <label for="vendor">Vendor</label>
        <input id="vendor" type="text" v-model="vendor" list="vendors">
        <datalist id="vendors">
            <option v-bind:key="vendor.title" v-for="vendor in vendors">{{ vendor }}</option>
        </datalist>
</div>
  </div>
</template>

<script>
export default {
  name: 'CardForm',
  methods: {
    sendNameToCard () {
      console.log('hej')
    }
  },
  data () {
    return {
      vendor: '',
      vendors: [
        'Bitcoin INC',
        'Ninja Bank',
        'Block Chain INC',
        'Evil Corp'
      ],
      cardholder: ''
    }
  }
}
</script>

<style scoped>
.cardform {
    min-height: 350px;
}

.flex {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.flex label {
    display: flex;
    justify-content: flex-start;
    font-family: 'PT Mono';
    font-size: 12px;
    text-transform: uppercase;
}

.ccv-container {
    width: 50%;
}

.valid-container {
    width: 50%;
}

.flex input {
    height: 50px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.8);
}

.half {
    display: flex;
    flex-direction: row;
}
</style>
