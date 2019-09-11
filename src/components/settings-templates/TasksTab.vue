<template>
  <div>
    <h1>Настройки секции <b>Мои задачи</b></h1>
    <div class="form-wrapper">
      <b-field label="Имя">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-field label="Фамилия">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-field label="Телефон">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-field label="Номер счета">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-field label="УНП">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-button type="is-primary">Сохранить</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksTab',
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
