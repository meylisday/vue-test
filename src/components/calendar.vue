<template>
  <div class="calendar-wrapper">
    <div :style="{ gridTemplateColumns }" class="row">
      <div class="timetrack-header">
        <b-button rounded size="is-small" type="is-light" @click="scrollToToday">Сегодня</b-button>
        <b-button rounded size="is-small" type="is-light" disabled>К дате</b-button>
      </div>
      <div v-for="(header, index) in headers" :key="index" class="calendar-header-wrapper">
        <slot :header="header" name="header">{{ header.label }}</slot>
      </div>
    </div>
    <ul ref="scrollableContent" class="scrollable-content" @scroll="handleScroll">
      <li
        v-for="({ isStartOfMonth, isToday, weekDay, day, formated, monthHeader }, index) in datesTable"
        :key="formated"
        :ref="isToday ? 'today' : null"
        class="grid"
      >
        <div v-if="isStartOfMonth || !index" class="month-header">{{ monthHeader }}</div>
        <div :style="{ gridTemplateColumns }" class="row">
          <div class="cell">
            <span :class="{ today: isToday }" class="day">
              <span>{{ weekDay }}</span>
              <br />
              <span>{{ day }}</span>
            </span>
          </div>
          <div
            v-for="{ type } in headers"
            :key="type"
            class="cell"
            @click.self="handleEventCreation($event, type, formated)"
          >
            <ul v-if="hasNotification(formated, type)" :style="{ width: '100%' }">
              <li v-for="(event, index) in getEvents(formated, type)" :key="index">
                <slot :event="event" name="event">
                  <span :key="`${type}_${index}`">{{ event.label }}</span>
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
import { debounce, get, find, filter } from 'lodash-es'

export default {
  name: 'CalendarGrid',
  props: {
    headers: {
      required: true,
      type: Array
    },
    format: {
      default: 'YYYY-MM-DD',
      required: false,
      type: String
    },
    offset: {
      default: 10,
      required: false,
      type: Number
    },
    events: {
      required: true,
      type: Array
    },
    handleEventCreation: {
      required: true,
      type: Function
    },
    handleLoadMore: {
      required: true,
      type: Function
    }
  },
  data: function() {
    return {
      startDay: this.$moment().subtract(this.offset, 'days'),
      endDay: this.$moment().add(this.offset, 'days')
    }
  },
  computed: {
    today: function() {
      return this.$moment().format(this.format)
    },
    gridTemplateColumns: function() {
      return `5.75rem repeat(${this.headers.length}, 1fr)`
    },
    datesTable: function() {
      const dates = []

      for (let i = 0; i < this.endDay.diff(this.startDay, 'days'); i++) {
        const currentDate = this.$moment(this.startDay).add(i, 'days')
        const isToday = this.$moment().format(this.format) === currentDate.format(this.format)
        const isStartOfMonth = currentDate.date() === 1

        dates.push({
          isStartOfMonth,
          isToday,
          day: currentDate.format('D'),
          formated: currentDate.format(this.format),
          weekDay: currentDate.format('dd'),
          monthHeader: currentDate.format('MMMM, YYYY')
        })
      }

      return dates
    }
  },
  mounted: function() {
    // load more items if there is empty space on the page
    if (!this.isScrollable()) {
      this.loadMore()
    }
  },
  methods: {
    loadMore: function() {
      this.endDay = this.$moment(this.endDay).add(this.offset, 'days')
      this.handleLoadMore(this.startDay.format(this.format), this.endDay.format(this.format))
    },
    isScrollable: function() {
      const { scrollHeight, clientHeight } = this.$refs.scrollableContent

      return scrollHeight !== clientHeight
    },
    getEvents: function(date, type) {
      return filter(this.events, { date, type })
    },
    hasNotification: function(date, type) {
      return find(this.events, { date, type })
    },
    scrollToToday: function() {
      // Get offset of `today` element and assign to wrapper's scroll position
      const { offsetTop } = get(this.$refs, 'today[0]', {})

      this.$refs.scrollableContent.scrollTop = offsetTop
    },
    handleScroll: debounce(function(e) {
      const { scrollHeight, scrollTop, clientHeight } = e.target

      if (scrollTop + clientHeight + 150 >= scrollHeight) {
        this.loadMore()
      }
    }, 50)
  }
}
</script>

<style scoped>
.calendar-wrapper {
  bottom: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  position: relative;
  top: 0;
  width: 100%;
}
.timetrack-header {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.timetrack-header > * {
  box-shadow: var(--baseShadow);
  font-size: 0.7rem;
  font-weight: 500;
  margin: 0.5rem;
  text-transform: uppercase;
  width: 100%;
}
.calendar-header-wrapper {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
.scrollable-content {
  flex-grow: 1;
  overflow: auto;
  min-height: 0;
  position: relative;
  scroll-behavior: smooth;
}
.grid {
  display: grid;
  margin-bottom: -1px;
  position: relative;
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
  min-width: 5.5rem;
  padding: 0.75rem;
  cursor: pointer;
}
.day {
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  height: 3rem;
  padding: 0.25rem;
  text-transform: capitalize;
  width: 3rem;
}
.today {
  background: #6e8cfb;
  box-shadow: var(--baseShadow);
  color: #fff;
}
.today:hover {
  background: #647cd2;
}
.today::before {
  position: absolute;
  height: 2px;
  background-color: #6e8cfb;
  content: '';
  top: 0;
  height: 3px;
  left: 0;
  width: 100%;
}
.month-header {
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-align: start;
  text-transform: capitalize;
}
</style>
