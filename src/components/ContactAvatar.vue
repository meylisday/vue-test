<template>
  <div class="avatar">{{ abriviation }}</div>
</template>
<script>
export default {
  name: 'ContactAvatar',
  props: {
    personName: {
      required: true,
      type: String
    }
  },
  computed: {
    abriviation: function() {
      return this.personName[0].toUpperCase()
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap&subset=cyrillic');
.avatar {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: blue;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
}
</style>
