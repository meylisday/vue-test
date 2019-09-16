<template>
  <div class="wrapper-comment">
    <div>
      <span>{{ messageText }}</span>
    </div>
    <div class="block-centered">
      <span class="comment-time">{{ fromNow }}</span>
      <b-icon class="delete-button" icon="delete-outline"></b-icon>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    messageText: {
      required: true,
      type: String
    },
    messageTime: {
      required: true,
      type: String
    }
  },
  computed: {
    fromNow: function() {
      return this.$moment(this.messageTime).calendar()
    }
  }
}
</script>
<style scoped>
.wrapper-comment {
  display: flex;
  align-items: center;
  line-height: 3;
  justify-content: space-between;
  margin-top: 25px;
}
.comment-time {
  color: #949494;
  font-size: 14px;
  margin-right: 12px;
}
.delete-button {
  cursor: pointer;
}
.block-centered {
  display: flex;
  align-items: center;
}
</style>
