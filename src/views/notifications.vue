<template>
  <div class="page-wrapper">
    <event-view-modal v-if="isDisplayView" :position="position" :on-close="handleClose" :event="selectedEvent" />
    <event-add-modal
      v-if="isDisplayAdd"
      :position="position"
      :on-close="handleClose"
      :event-data="newEventData"
      :on-save="handleSave"
    />
    <calendar-grid
      :format="timeFormat"
      :events="events"
      :handle-event-creation="addEvent"
      :handle-load-more="loadMore"
      :headers="headers"
      :locale="locale"
    >
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
import { FetchAPI } from '@/api'

import EventViewModal from '@/components/event-view-modal'
import EventAddModal from '@/components/event-add-modal'
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
    CalendarHeaderTaxes,
    EventViewModal,
    EventAddModal
  },
  data() {
    return {
      timeFormat: 'YYYY-MM-DD',
      position: {
        top: 0,
        left: 0
      },
      selectedEvent: null,
      isDisplayView: false,
      isDisplayAdd: false,
      newEventData: null,
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
      events: []
    }
  },
  mounted() {
    this.events = FetchAPI.getAll()
  },
  methods: {
    loadMore: (...params) => console.log(params),
    getColor: (headers, { type }) => get(find(headers, { type }), 'color', '#ccc'),
    addEvent: function(e, type, date) {
      const { clientX, clientY } = e
      this.isDisplayAdd = true
      this.position = {
        left: `${clientX}px`,
        top: `${clientY}px`
      }
      this.newEventData = {
        date,
        type,
        label: get(find(this.headers, { type }), 'label', '')
      }
    },
    viewEvent: function(e, event) {
      const { clientX, clientY } = e
      this.selectedEvent = event
      this.isDisplayView = true
      this.position = {
        left: `${clientX}px`,
        top: `${clientY}px`
      }
    },
    handleClose: function() {
      this.isDisplayView = false
      this.isDisplayAdd = false
      this.selectedEvent = null
      this.newEventData = null
    },
    handleSave: function(newEvent) {
      FetchAPI.postOne({
        ...newEvent,
        number: 'Номер',
        id: (Math.random() * 1000000).toFixed(0).toString()
      })
      this.events = FetchAPI.getAll()
      this.handleClose()
    }
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
