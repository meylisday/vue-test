<template>
  <div class="calendar-custom-header">
    <span class="calendar-custom-header-label">
      {{ data.label }}
      <b-icon icon="phone-in-talk"></b-icon>
    </span>
    <p>платежи до: 16:30</p>
    <p>открыто до: 17:30</p>
    <b-button class="calendar-custom-header-add" type="is-light" icon-left="plus" size="is-small" rounded></b-button>
  </div>
</template>

<script>
import './styles.css'

export default {
  name: 'CalendarHeaderBank',
  props: {
    data: {
      required: true,
      type: Object
    }
  }
}
</script>
