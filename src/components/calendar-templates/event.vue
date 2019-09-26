<template>
  <div :style="{ backgroundColor: color }" class="calendar-event">
    <b-icon class="close" icon="close" @click.native="handleDeleteEvent" />
    <div @click="handleViewEvent">
      <p class="calendar-event-label">{{ event.label }}</p>
      <p>{{ event.number }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarEvent',
  props: {
    event: {
      required: true,
      type: Object
    },
    color: {
      required: false,
      type: String,
      default: '#66bb6a'
    },
    viewEvent: {
      required: true,
      type: Function
    },
    deleteEvent: {
      required: true,
      type: Function
    }
  },
  methods: {
    handleDeleteEvent: function() {
      this.deleteEvent(this.event.id)
    },
    handleViewEvent: function(e) {
      this.viewEvent(e, this.event)
    }
  }
}
</script>
<style scoped>
.calendar-event {
  position: relative;
}
.close {
  position: absolute;
  cursor: pointer;
  right: 5px;
  top: 5px;
}
</style>
