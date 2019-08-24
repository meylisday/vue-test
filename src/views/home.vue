<template>
  <div>
    1
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      groceryList: [{ id: 1, text: 'Овощи' }, { id: 2, text: 'Сыр' }, { id: 3, text: 'Что там ещё люди едят?' }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column-wrap {
  width: 395px;
}
.column {
  display: flex;
  justify-content: center;
}
.wrapper-item {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.wrapper-item img {
  margin-left: 11px;
}
.wrapper-column-title {
  text-align: center;
}
.wrapper-column-title p {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 105.47%;
  color: rgba(0, 0, 0, 0.7);
}
.column-title {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
}
table {
  width: 395px;
}
tr {
  width: 100%;
}
td {
  padding: 5em; /* Поля вокруг содержимого таблицы */
  border: 1px solid rgba(0, 0, 0, 0.35);
  text-align: center !important;
}
.footer-text {
  justify-content: flex-start;
}
.column-table {
  padding: 0;
}
.button-add img {
  padding: 1em;
}
</style>
