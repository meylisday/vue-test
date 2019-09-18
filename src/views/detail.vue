<template>
  <section>
    <div class="detail-title">
      <h1>Подробный просмотр события</h1>
      <div class="detail-header">
        <span>{{ type }}</span>
      </div>
    </div>
    <hr />
    <div class="date-info">
      <div class="date-info-right">
        <div><b-icon class="date-info-icon" icon="calendar-blank-outline" /></div>
        <div>
          <span class="info-bold">{{ eventDateLabel }}</span>
        </div>
        <div>
          <router-link to="/">Посмотреть в календаре </router-link>
        </div>
      </div>
      <div class="info-muted">
        Последнее изменение <span>{{ lastUpdatedLabel }}</span>
      </div>
    </div>
    <b-field>
      <b-input v-model="textareaMessage" type="textarea"></b-input>
    </b-field>
    <div class="comment-block-header">
      <div><b-icon icon="comment-outline" /></div>
      <div>
        <span class="comment-block-count">Комментарии ({{ comments.length }})</span>
      </div>
    </div>
    <div class="comment-block">
      <b-field>
        <b-input
          v-model="commentInput"
          placeholder="Добавить комментарий"
          class="comment-add"
          @keyup.native.enter="sendComment"
        >
        </b-input>
      </b-field>
      <b-button
        :disabled="!commentInput"
        class="send-comment"
        icon-left="send"
        type="is-text"
        @click="sendComment"
      ></b-button>
    </div>
    <comment
      v-for="item in comments"
      :key="item.id"
      :message-id="item.id"
      :message-text="item.text"
      :message-time="item.time"
      :on-delete="deleteComment"
    />
    <div class="wrapper-is-primary"><b-button type="is-primary" @click="saveDetails">Сохранить</b-button></div>
  </section>
</template>

<script>
import { BankTab, TaxesTab, TasksTab, ClientsTab } from '@/components/settings-templates'
import Comment from '@/components/comment'
import get from 'lodash-es/get'
import find from 'lodash-es/find'
import pull from 'lodash-es/pull'
import { generateId, EventAPI } from '@/api'
import { headers } from '@/config'
export default {
  name: 'Settings',
  components: {
    BankTab,
    TaxesTab,
    TasksTab,
    ClientsTab,
    Comment
  },
  data() {
    return {
      comments: [],
      commentInput: '',
      lastUpdated: '',
      textareaMessage: '',
      eventDate: '',
      type: ''
    }
  },
  computed: {
    lastUpdatedLabel: function() {
      return this.$moment(this.lastUpdated).fromNow()
    },
    eventDateLabel: function() {
      return this.$moment(this.eventDate).fromNow()
    }
  },
  mounted() {
    const event = EventAPI.getOne(this.$route.params.id)
    this.comments = event.comments || []
    this.lastUpdated = event.modified || event.created
    this.textareaMessage = event.label
    this.eventDate = event.date
    this.type = get(find(headers, { type: event.type }), 'label')
  },
  methods: {
    sendComment: function() {
      console.log(generateId())
      this.comments.push({
        text: this.commentInput,
        time: this.$moment().format(),
        id: generateId()
      })
      const event = EventAPI.getOne(this.$route.params.id)
      const newEvent = { ...event, comments: this.comments }
      EventAPI.putOne(event.id, newEvent)
      this.commentInput = ''
    },
    deleteComment: function(id) {
      const comment = find(this.comments, { id })
      this.comments = [...pull(this.comments, comment)] // Copy `this.comments` items to new array

      const event = EventAPI.getOne(this.$route.params.id)
      const updatedEvent = { ...event, comments: this.comments }
      EventAPI.putOne(event.id, updatedEvent)
      this.commentInput = ''
    },
    saveDetails: function() {
      this.lastUpdated = this.$moment().format()
      const event = EventAPI.getOne(this.$route.params.id)
      const newEvent = { ...event, label: this.textareaMessage, modified: this.$moment().format() }
      EventAPI.putOne(event.id, newEvent)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap&subset=cyrillic');
section {
  width: 769px;
  margin: auto;
  margin-top: 38px;
}
h1 {
  font-weight: bold;
  font-size: 20px;
}
.detail-title {
  display: flex;
  justify-content: space-between;
}
.detail-header {
  background: rgba(255, 167, 38, 0.1);
  border-radius: 3px;
  width: 116px;
  height: 28px;
}
.detail-header span {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffa726;
}
.date-info {
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.date-info-right {
  display: flex;
  align-items: center;
}
.date-info-right div {
  margin-right: 10px;
}
.date-info a {
  color: #769bff;
}
.info-bold {
  font-weight: bold;
}
.info-muted {
  color: #949494;
}
.info-muted span {
  font-weight: bold;
}
.comment-block-header {
  display: flex;
  margin-top: 48px;
}
.comment-block-count {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #191f30;
  margin-left: 6px;
}
.send-comment {
  position: absolute;
  right: 0;
  top: 0;
}
.comment-block {
  position: relative;
}
.comment-add {
  margin-top: 13px;
}
.is-text:focus {
  box-shadow: unset;
}
.button.is-text:hover,
.button.is-text:active {
  background: unset;
  color: unset;
}
.wrapper-is-primary {
  text-align: left;
  margin-top: 28px;
}
.is-primary {
  width: 130px;
  height: 45px;
  background: #769bff;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  margin-top: 15px;
}
</style>
<style>
.comment-add input {
  font-size: 14px;
  line-height: 16px;
  padding: 11px;
}
</style>
