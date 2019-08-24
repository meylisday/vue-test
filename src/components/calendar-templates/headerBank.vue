<template>
  <div class="calendar-header">
    <span class="calendar-header-label">
      {{ data.label }}
      <b-icon icon="phone-in-talk"></b-icon>
    </span>
    <p>платежи до: 16:30</p>
    <p>открыто до: 17:30</p>
    <b-button
      class="calendar-header-add"
      icon-left="plus"
      rounded
      size="is-small"
      type="is-light"
      @click="onAddClick"
    ></b-button>
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
    },
    add: {
      default: () => {},
      required: false,
      type: Function
    }
  },
  methods: {
    onAddClick: function(event) {
      this.add(event, this.data.type)
    }
  }
}
</script>
