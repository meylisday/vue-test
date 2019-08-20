<template>
  <div class="wrapper">
    <Calendar
      :notifications="notifications"
      :headers="headers"
      :locale="locale"
      :loadMore="loadMore"
    >
      <!-- Dynamic Header Template -->
      <template v-slot:header="{header}">
        <component :is="header.as" :data="header"></component>
      </template>
    </Calendar>
  </div>
</template>

<script>
import Vue from "vue";
import Calendar from "@/components/calendar";

Vue.component("header-bank", {
  props: ['data'],
  template: "<h1>{{data.label}}</h1>",
});

Vue.component("header-task", {
  props: ['data'],
  template: "<h1>{{data.label}}</h1>"
});

export default {
  name: "notifications",
  components: {
    Calendar
  },
  methods: {
    loadMore: function(...params) {
      console.log(params);
    }
  },
  data() {
    return {
      locale: "ru",
      headers: [
        { type: "bank", label: "Банк", as: 'header-bank', color: '' },
        { type: "nfs", label: "Налоговая", as: 'header-bank', color: '' },
        { type: "tasks", label: "Мои задачи", as: 'header-task', color: '' },
        { type: "clients", label: "Клиенты", as: 'header-task', color: '' },
      ],
      notifications: [
        {
          date: "08/21/2019",
          type: "nfc",
          label: "Отправить сведения о сделке",
          description: "Номер",
          id: "1"
        },
        {
          date: "08/19/2019",
          type: "bank",
          label: "Отправить сведения о сделке",
          description: "Номер",
          id: "2"
        }
      ]
    };
  }
};
</script>
<style scoped>
.wrapper {
  display: flex;
  height: -webkit-fill-available;
  padding: 0 3rem;
  position: relative;
}
</style>