<template>
  <div class="page-wrapper">
    <calendar-grid
      :events="events"
      :handle-event-creation="addEvent"
      :handle-load-more="loadMore"
      :headers="headers"
      :locale="locale"
    >
      <!-- custom event and kebab-case with init custom event -->

      <!-- Dynamic Header Template -->
      <template v-slot:header="{ header }">
        <component :is="header.displayAs" :data="header" :add="addEvent" />
      </template>
      <!-- slots -->

      <!-- Dynamic Notification Template -->
      <template v-slot:event="{ event }">
        <calendar-event :event="event" :color="getColor(headers, event)" @click.native="viewEvent($event, event)" />
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
  name: 'CalendarPage',
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
          color: '#66bb6a'
        },
        {
          type: 'taxes',
          label: 'Налоговая',
          displayAs: 'calendar-header-taxes',
          color: '#ffa726'
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
      events: [
        {
          date: '08/21/2019',
          type: 'taxes',
          label: 'Отправить сведения о сделке',
          number: 'Номер',
          id: '1'
        },
        {
          date: '08/23/2019',
          type: 'bank',
          label: 'Отправить сведения о сделке',
          number: 'Номер',
          id: '2'
        }
      ]
    }
  },
  methods: {
    loadMore: (...params) => console.log(params), //spread operator
    getColor: (headers, { type }) => get(find(headers, { type }), 'color', '#ccc'),
    addEvent: (...params) => console.log(params),
    viewEvent: (...params) => console.log(params)
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
