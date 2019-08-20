<template>
  <div id="app">
    <home-header/>
    <router-view/>
    <home-footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    'home-header': Header,
    'home-footer': Footer
  },
}
</script>

<style>
#app {
  text-align: center;
}
</style>
