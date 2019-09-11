<template>
  <div>
    <h1>Настройки секции <b>Банк</b></h1>
    <div class="form-wrapper">
      <b-field label="Реквизиты" class="text-input">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-field label="Счет" class="text-input">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-field label="Имя операциониста" class="text-input">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-button type="is-primary">Сохранить</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankTab',
  components: {},
  data() {
    return {}
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
