<template>
  <div class="calendar-header">
    <span class="calendar-header-label">
      {{ data.label }}
      <b-icon icon="phone-in-talk" />
    </span>
    <p>перерыв: <span>13 - 14</span></p>
    <p>открыто до: <span>17:30</span></p>
    <b-button
      class="calendar-header-add"
      icon-left="plus"
      rounded
      size="is-small"
      type="is-light"
      @click="onAddClick"
    />
  </div>
</template>

<script>
import './styles.css'

export default {
  name: 'CalendarHeaderTaxes',
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
