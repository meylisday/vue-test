<template>
  <div :style="position" class="wrapper-modal">
    <b-icon class="close" icon="close" @click.native="onClose" />
    <span class="label">{{ fromNow }}</span>
    <ul>
      <li>Текущий остаток: 2457 BYN</li>
      <li>Сумма к оплате: 1378 BYN</li>
      <li>Ожидаемый остаток: 2457 BYN</li>
    </ul>
    <div class="group-top-button">
      <b-button to="/#" type="is-info">Подготовить декларацию</b-button>
    </div>
    <div class="group-bottom-button">
      <b-button type="is-light">Похожие документы</b-button>
      <b-button type="is-light" @click="navigateToDetails">Подробнее</b-button>
    </div>
  </div>
</template>

<script>
// import './styles.css'

export default {
  name: 'EventViewModal',
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
    event: {
      required: true,
      type: Object
    }
  },
  computed: {
    fromNow: function() {
      return this.$moment(this.event.date).fromNow()
    }
  },
  methods: {
    navigateToDetails: function() {
      this.$router.push({ name: 'details', params: { id: this.event.id } })
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap&subset=cyrillic');
.wrapper-modal {
  position: fixed;
  width: 355px;
  height: 260px;
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
