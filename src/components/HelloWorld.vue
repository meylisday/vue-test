<template>
  <ol>
    <li v-for="todo in todos" v-bind:key="todo.id">
      {{ todo.text }}
    </li>
  </ol>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
