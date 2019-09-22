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
<style>
.tabs {
  margin-top: 48px;
}
.tabs ul li {
  margin-right: 50px;
  margin-left: 50px;
}
.tabs li.is-active a {
  border-bottom-color: #769bff;
  color: #769bff;
}
</style>
