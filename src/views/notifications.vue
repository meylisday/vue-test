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
        <calendar-event
          :event="event"
          :color="getColor(headers, event)"
          :view-event="viewEvent"
          :delete-event="deleteEvent"
        />
      </template>
    </calendar-grid>
  </div>
</template>

<script>
import get from 'lodash-es/get'
import find from 'lodash-es/find'
import { RemoteAPI } from '@/api'

import EventViewModal from '@/components/event-view-modal'
import EventAddModal from '@/components/event-add-modal'
import CalendarGrid from '@/components/calendar'
import { headers, timeFormat, locale } from '@/config'

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
      timeFormat,
      position: {
        top: 0,
        left: 0
      },
      selectedEvent: null,
      isDisplayView: false,
      isDisplayAdd: false,
      newEventData: null,
      locale,
      headers,
      events: []
    }
  },
  mounted() {
    RemoteAPI.getEvents().then(events => {
      this.events = events
    })
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
    deleteEvent: async function(eventId) {
      await RemoteAPI.deleteEvent(eventId)

      RemoteAPI.getEvents().then(events => {
        this.events = events
      })
    },
    handleClose: function() {
      this.isDisplayView = false
      this.isDisplayAdd = false
      this.selectedEvent = null
      this.newEventData = null
    },
    handleSave: async function(newEvent) {
      await RemoteAPI.createEvent({
        ...newEvent,
        number: 'Номер'
      })
      this.events = await RemoteAPI.getEvents()
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
