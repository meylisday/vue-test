<template>
  <div class="calendar-container">
    <div :style="{ gridTemplateColumns }" class="row">
      <div></div>
      <div v-for="(header, index) in headers" :key="index" class="calendar-header">
        <slot :header="header" name="header">{{ header.label }}</slot>
      </div>
    </div>
    <ul class="scrollable-content" @scroll="handleScroll">
      <li
        v-for="({ isStartOfMonth, isToday, weekDay, day, year, formated, month }, index) in datesTable"
        :key="formated"
        class="grid"
      >
        <div v-if="isStartOfMonth || !index" class="month-separator">{{ month }}, {{ year }}</div>
        <div :style="{ gridTemplateColumns }" class="row">
          <div class="cell">
            <span :class="{ today: isToday }" class="day">
              {{ weekDay }}
              <br />
              {{ day }}
            </span>
          </div>
          <div v-for="{ type } in headers" :key="type" class="cell">
            <ul v-if="hasNotification(formated, type)" :style="{ width: '100%' }">
              <li v-for="(event, index) in getEvents(formated, type)" :key="index">
                <slot :event="event" name="event">
                  <span :key="`${type}_${index}`" class="notification">{{ event.label }}</span>
                </slot>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
import { invoke, debounce, find, filter } from 'lodash-es'

export default {
  name: 'CalendarGrid',
  props: {
    headers: {
      required: true,
      type: Array
    },
    locale: {
      default: 'ru',
      required: false,
      type: String
    },
    format: {
      default: 'MM/DD/YYYY',
      required: false,
      type: String
    },
    offset: {
      default: 5,
      required: false,
      type: Number
    },
    notifications: {
      required: true,
      type: Array
    },
    loadMore: {
      default: () => {},
      required: false,
      type: Function
    }
  },
  data: function() {
    return {
      startDay: moment().subtract(this.offset, 'days'),
      endDay: moment().add(this.offset, 'days')
    }
  },
  computed: {
    today: function() {
      return moment().format(this.format)
    },
    gridTemplateColumns: function() {
      return `5.75rem repeat(${this.headers.length}, 1fr)`
    },
    datesTable: function() {
      const dates = []

      for (let i = 0; i < this.endDay.diff(this.startDay, 'days'); i++) {
        const currentDate = moment(this.startDay).add(i, 'days')
        const isToday = moment().format(this.format) === currentDate.format(this.format)
        const isStartOfMonth = currentDate.date() === 1

        dates.push({
          isStartOfMonth,
          isToday,
          day: currentDate.format('D'),
          formated: currentDate.format(this.format),
          month: currentDate.format('MMMM'),
          weekDay: currentDate.format('dd'),
          year: currentDate.format('YYYY')
        })
      }

      return dates
    }
  },
  created: function() {
    moment.locale(this.locale)
  },
  methods: {
    getEvents: function(date, type) {
      return filter(this.notifications, { date, type })
    },
    hasNotification: function(date, type) {
      return find(this.notifications, { date, type })
    },
    handleScroll: debounce(function(e) {
      const { scrollHeight, scrollTop, clientHeight } = e.target

      if (scrollTop + clientHeight + 150 >= scrollHeight) {
        this.endDay = moment(this.endDay).add(this.offset, 'days')

        invoke(this, 'loadMore', this.startDay.format(this.format), this.endDay.format(this.format))
      }
    }, 50)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.calendar-container {
  bottom: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;
  position: relative;
}
.calendar-header {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
.scrollable-content {
  flex-grow: 1;
  overflow: auto;
  min-height: 0;
}
.grid {
  display: grid;
  margin-bottom: -1px;
}
.row {
  display: grid;
}
.cell {
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  margin: 0 0.1rem;
  min-height: 4.5rem;
  padding: 0.5rem;
}
.day {
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.85rem;
  height: 3rem;
  padding: 0.25rem;
  width: 3rem;
}
.today {
  color: #fff;
  background: #6e8cfb;
}
.today:hover {
  background: #647cd2;
}
.month-separator {
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-align: start;
}
.notification {
  background: rgb(255, 208, 0);
  border-radius: 0.25rem;
  display: flex;
  margin: 0.1rem;
  padding: 0.5rem;
}
</style>