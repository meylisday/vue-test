<template>
  <div class="wrapper-comment">
    <div>
      <span>{{ messageText }}</span>
    </div>
    <div class="block-centered">
      <span class="comment-time">{{ fromNow }}</span>
      <b-button class="delete-button" type="is-text" icon-left="delete-outline" @click="deleteComment"></b-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    messageId: {
      required: true,
      type: String
    },
    messageText: {
      required: true,
      type: String
    },
    messageTime: {
      required: true,
      type: String
    },
    onDelete: {
      required: true,
      type: Function
    }
  },
  computed: {
    fromNow: function() {
      return this.$moment(this.messageTime).calendar()
    }
  },
  methods: {
    deleteComment: function() {
      console.log(this.messageId)
      this.onDelete(this.messageId)
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
.button.is-text:focus {
  box-shadow: unset;
}
.button.is-text:hover,
.button.is-text:active {
  background: unset;
  color: unset;
}
</style>
