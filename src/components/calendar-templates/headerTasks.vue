<template>
  <div class="calendar-header">
    <span class="calendar-header-label">
      {{ data.label }}
    </span>
    <div></div>
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
  name: 'CalendarHeaderTasks',
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
