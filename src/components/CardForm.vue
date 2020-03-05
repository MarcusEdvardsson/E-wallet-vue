<template>
  <form class="cardform">
    <div class="card-container flex">
        <label for="cardnumber">Card Number</label>
        <input
        id="cardnumber"
        placeholder="XXXX XXXX XXXX XXXX"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'XXXX XXXX XXXX XXXX'"
        type="text"
        pattern="[0-9]{16,16}"
        maxlength="16"
        v-model.number="input.cardNumber"
        @input="setValue('cardNumber', $event.target.value)">
    </div>
        <div class="name-container flex">
        <label for="name">Cardholder Name</label>
        <input id="name"
        maxlength="20"
        placeholder="Cardholder Name"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Cardholder Name'"
        type="text"
        v-model.trim="input.cardName"
        @input="setValue('cardHolder', $event.target.value)">
    </div>
    <div class="half">
        <div class="valid-container flex">
            <label for="expirationdate">Valid thru</label>
            <input id="expirationdate"
            placeholder="02/12"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = '02/12'"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
            v-model.number="card.exp">
        </div>
        <div class="ccv-container flex">
            <label for="securitycode">CCV</label>
            <input id="securitycode"
            maxlength="3"
            placeholder="XXX"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'XXX'"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
            v-model.number="input.ccv"
            @input="setValue('ccv', $event.target.value)">
        </div>
    </div>
    <!-- <div class="vendor-container flex">
        <label for="vendor">Vendor</label>
        <input id="vendor"
        type="text"
        v-model="card.vendor"
        list="vendors">
        <datalist id="vendors">
            <option v-bind:key="vendor.title" v-for="vendor in vendors">{{ vendor }}</option>
        </datalist>
    </div> -->
        <label class="form-label">Vendor</label>
        <vSelect
          class=" form-input--std"
          type="text"
          v-model="input.vendor"
          :options="vendors"
          label="name"
          @input="setValue('vendor', $event.target)">
          </vSelect>
  </form>
</template>

<script>
import vSelect from 'vue-select'
import { vendors } from '@/assets/vendors.json'
export default {
  name: 'CardForm',
  components: {
    vSelect
  },
  props: {
    input: Object
  },
  methods: {
    setValue (field, value) {
      this.input[field] = value
      this.$v.input[field].$touch()
    }
  },
  data: () => {
    return {
      vendors: vendors
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
    margin-left: 5px;
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

.bitcoin {
  background: linear-gradient(237.41deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 99.07%), #FFAE34;
}

.ninja {
  background: linear-gradient(237.75deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%), #222222;
}

.blockchain {
  background: linear-gradient(238.04deg, rgba(0, 0, 0, 0.15) 1.49%, rgba(0, 0, 0, 0) 100%), #8B58F9;
}

.evilcorp {
  background: linear-gradient(237.75deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #F33355;
}

input::placeholder {
  font-variant: small-caps;
}

</style>
