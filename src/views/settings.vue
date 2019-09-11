<template>
  <section>
    <b-tabs v-model="selectedTab" position="is-centered" class="block">
      <b-tab-item label="Банк">
        <bank-tab />
      </b-tab-item>
      <b-tab-item label="Налоговая">
        <taxes-tab />
      </b-tab-item>
      <b-tab-item label="Мои задачи">
        <tasks-tab />
      </b-tab-item>
      <b-tab-item label="Клиенты">
        <clients-tab />
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
import { BankTab, TaxesTab, TasksTab, ClientsTab } from '@/components/settings-templates'
export default {
  name: 'Settings',
  components: {
    BankTab,
    TaxesTab,
    TasksTab,
    ClientsTab
  },
  data() {
    return {
      selectedTab: 0
    }
  },
  updated() {
    console.log(this.selectedTab)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
