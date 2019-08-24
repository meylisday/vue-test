<template>
  <div :style="{ backgroundColor: color }" class="calendar-event">
    <p class="calendar-event-label">{{ event.label }}</p>
    <p>{{ event.number }}</p>
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
    }
  }
}
</script>
