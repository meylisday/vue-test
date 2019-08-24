<template>
  <div class="page-wrapper">
    <calendar-grid :notifications="notifications" :headers="headers" :locale="locale" :load-more="loadMore">
      <!-- Dynamic Header Template -->
      <template v-slot:header="{ header }">
        <component :is="header.displayAs" :data="header"></component>
      </template>
      <!-- Dynamic Notification Template -->
      <template v-slot:event="{ event }">
        <calendar-event :event="event" :color="getColor(headers, event)"></calendar-event>
      </template>
    </calendar-grid>
  </div>
</template>

<script>
import get from 'lodash-es/get'
import find from 'lodash-es/find'

import CalendarGrid from '@/components/calendar'
import {
  CalendarEvent,
  CalendarHeaderBank,
  CalendarHeaderTasks,
  CalendarHeaderTaxes
} from '@/components/calendar-templates'

export default {
  name: 'CalendarNotifications',
  components: {
    CalendarGrid,
    CalendarEvent,
    CalendarHeaderBank,
    CalendarHeaderTasks,
    CalendarHeaderTaxes
  },
  data() {
    return {
      locale: 'ru',
      headers: [
        {
          type: 'bank',
          label: 'Банк',
          displayAs: 'calendar-header-bank',
          color: 'green'
        },
        {
          type: 'taxes',
          label: 'Налоговая',
          displayAs: 'calendar-header-taxes',
          color: 'orange'
        },
        {
          type: 'tasks',
          label: 'Мои задачи',
          displayAs: 'calendar-header-tasks',
          color: 'blue'
        },
        {
          type: 'clients',
          label: 'Клиенты',
          displayAs: 'calendar-header-tasks',
          color: 'red'
        }
      ],
      notifications: [
        {
          date: '08/21/2019',
          type: 'taxes',
          label: 'Отправить сведения о сделке',
          number: 'Номер',
          id: '1'
        },
        {
          date: '08/19/2019',
          type: 'bank',
          label: 'Отправить сведения о сделке',
          number: 'Номер',
          id: '2'
        }
      ]
    }
  },
  methods: {
    loadMore: function(...params) {
      console.log(params)
    },
    getColor: (headers, { type }) => get(find(headers, { type }), 'color', '#ccc')
  }
}
</script>
<style scoped>
.page-wrapper {
  display: flex;
  height: -webkit-fill-available;
  padding: 0 3rem;
  position: relative;
}
</style>
