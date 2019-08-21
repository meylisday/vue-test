<template>
  <div class="calendar-custom-header">
    <span class="calendar-custom-header-label">
      {{data.label}}
      <b-icon icon="phone-in-talk"></b-icon>
    </span>
    <p>
      платежи до:
      <span>16:30</span>
    </p>
    <p>
      открыто до:
      <span>17:30</span>
    </p>
    <b-button
      class="calendar-custom-header-add"
      type="is-light"
      icon-left="plus"
      size="is-small"
      rounded
    ></b-button>
  </div>
</template>

<script>
import "./styles.css";

export default {
  name: "calendar-header-bank",
  props: {
    data: {
      required: true,
      type: Object
    }
  }
};
</script>