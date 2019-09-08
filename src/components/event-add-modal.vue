<template>
  <div :style="position" class="wrapper-modal">
    <b-icon class="close" icon="close" @click.native="onClose" />
    <b-field label="Название">
      <b-input v-model="currentTitle"></b-input>
    </b-field>
    <b-field label="Куда">
      <b-input v-model="currentTypeLabel" disabled></b-input>
    </b-field>
    <b-field label="Выберите дату">
      <b-datepicker v-model="currentDate" :date-formatter="formatDate" icon="calendar-today" required> </b-datepicker>
    </b-field>
    <div class="group-top-button">
      <b-button type="is-info" @click="onSaveClick">Сохранить</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventAddModal',
  props: {
    position: {
      required: false,
      type: Object,
      default: () => {}
    },
    onClose: {
      required: true,
      type: Function
    },
    onSave: {
      required: true,
      type: Function
    },
    eventData: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      currentTitle: ''
    }
  },
  computed: {
    currentDate: function() {
      return this.eventData.date ? new Date(this.eventData.date) : new Date()
    },
    currentTypeLabel: function() {
      return this.eventData.label
    }
  },
  methods: {
    formatDate: function(date) {
      return this.$moment(date).format('YYYY-MM-DD')
    },
    onSaveClick: function() {
      this.onSave({
        label: this.currentTitle,
        date: this.$moment(this.currentDate).format('YYYY-MM-DD'),
        type: this.eventData.type
      })
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap&subset=cyrillic');
.wrapper-modal {
  position: fixed;
  width: 355px;
  height: auto;
  z-index: 100;
  background: #ffffff;
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1em;
  text-align: left;
  color: #000000;
  font-family: 'Roboto', sans-serif;
}
.label {
  font-size: 13px;
  font-weight: 500;
  color: #000000;
}
.is-info {
  background: #769bff;
  border-radius: 5px;
  font-size: 16px;
}
.is-light {
  background: #efefef;
  border-radius: 5px;
  font-size: 14px;
  color: #000000;
}
ul {
  margin: 1rem 0 0.9rem 0;
}
ul li {
  padding: 0.1rem;
  font-size: 16px;
}
.group-bottom-button {
  margin-top: 1.8em;
  display: flex;
  justify-content: space-between;
}
.close {
  position: relative;
  width: 20px;
  color: #8c8c8cd1;
  float: right;
  text-align: center;
  line-height: 1;
  font-size: 24px;
  border: 0;
  padding: 0;
  height: 10px;
  cursor: pointer;
}
</style>
