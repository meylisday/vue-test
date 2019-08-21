<template>
  <div class="calendar-custom-header">
    <span class="calendar-custom-header-label">
      {{data.label}}
    </span>
    <div></div>
    <b-button class="calendar-custom-header-add" type="is-light" icon-left="plus" size="is-small" rounded></b-button>
  </div>
</template>

<script>
import './styles.css'

export default {
  name: "calendar-header-tasks",
  props: {
    data: {
      required: true,
      type: Object
    }
  }
};
</script>
