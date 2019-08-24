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
      default: '#6e8cfb'
    }
  }
}
</script>

<style scoped>
.calendar-event {
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: #fff;
  box-shadow: 0.1rem 0.1rem 1rem grey;
}
.calendar-event-label {
  font-weight: 500;
}</style
>>
