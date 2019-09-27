<template>
  <div id="app">
    <common-header />
    <router-view />
    <common-footer />
  </div>
</template>

<script>
import CommonHeader from '@/components/header'
import CommonFooter from '@/components/footer'

export default {
  name: 'App',
  components: {
    CommonHeader,
    CommonFooter
  }
}
</script>

<style>
#app {
  text-align: center;
}
section.datepicker-table {
  display: block !important;
}
</style>
