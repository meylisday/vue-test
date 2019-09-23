<template>
  <div>
    <h1>Настройки секции <b>Налоговая</b></h1>
    <div class="form-wrapper">
      <b-field label="Вид организации">
        <b-input v-model="organizationType"></b-input>
      </b-field>
      <b-field label="Банк">
        <b-input v-model="bank"></b-input>
      </b-field>
      <b-field label="Схема налогооблажения">
        <b-input v-model="taxSchema"></b-input>
      </b-field>
      <b-field label="Расчетный счет">
        <b-input v-model="accountNumber"></b-input>
      </b-field>
      <b-field label="Телефон инспектора">
        <b-input v-model="inspectorPhone"></b-input>
      </b-field>
      <b-button type="is-primary" @click="saveSettings">Сохранить</b-button>
    </div>
  </div>
</template>

<script>
import { RemoteAPI } from '@/api'

export default {
  name: 'TaxesTab',
  data() {
    return {
      organizationType: '',
      bank: '',
      taxSchema: '',
      accountNumber: '',
      inspectorPhone: ''
    }
  },
  created() {
    this.getSettingsByType()
  },
  methods: {
    setData: function(data) {
      this.organizationType = data.organizationType
      this.bank = data.bank
      this.taxSchema = data.taxSchema
      this.accountNumber = data.accountNumber
      this.inspectorPhone = data.inspectorPhone
    },
    getSettingsByType: async function() {
      const settings = await RemoteAPI.getSettings('taxes')

      this.setData(settings)
    },
    saveSettings: async function() {
      const settings = await RemoteAPI.updateSettings('taxes', {
        organizationType: this.organizationType,
        bank: this.bank,
        taxSchema: this.taxSchema,
        accountNumber: this.accountNumber,
        inspectorPhone: this.inspectorPhone
      })

      this.setData(settings)
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap&subset=cyrillic');
h1 {
  margin-top: 40px;
  font-size: 20px;
  line-height: 23px;
}
.form-wrapper {
  width: 300px;
  margin: auto;
  margin-top: 48px;
  text-align: left;
}
.is-primary {
  width: 130px;
  height: 45px;
  background: #769bff;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  margin-top: 15px;
}
</style>

<style>
.text-input label {
  font-weight: normal;
}
</style>
