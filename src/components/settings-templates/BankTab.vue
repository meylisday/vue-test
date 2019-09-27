<template>
  <div>
    <h1>Настройки секции <b>Банк</b></h1>
    <div class="form-wrapper">
      <b-field label="Реквизиты" class="text-input">
        <b-input v-model="requisites"></b-input>
      </b-field>
      <b-field label="Счет" class="text-input">
        <b-input v-model="account"></b-input>
      </b-field>
      <b-field label="Имя операциониста" class="text-input">
        <b-input v-model="operatorName"></b-input>
      </b-field>
      <b-button type="is-primary" @click="saveSettings">Сохранить</b-button>
    </div>
  </div>
</template>

<script>
import { RemoteAPI } from '@/api'

export default {
  name: 'BankTab',
  data() {
    return {
      requisites: '',
      account: '',
      operatorName: ''
    }
  },
  mounted() {
    this.getSettingsByType()
  },
  methods: {
    setData: function(data) {
      this.requisites = data.requisites
      this.account = data.account
      this.operatorName = data.operatorName
    },
    getSettingsByType: async function() {
      const settings = await RemoteAPI.getSettings('bank')

      this.setData(settings)
    },
    saveSettings: async function() {
      const settings = await RemoteAPI.updateSettings('bank', {
        requisites: this.requisites,
        account: this.account,
        operatorName: this.operatorName
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
