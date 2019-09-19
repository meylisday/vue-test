import pull from 'lodash-es/pull'
import find from 'lodash-es/find'
import moment from 'moment'

export const generateId = () => (Math.random() * 10000000 + Math.random() * 10000000).toFixed(0).toString()

export class EventAPI {
  static collection = [
    {
      date: '2019-09-10',
      type: 'taxes',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '34534576',
      modified: '2019-09-15T12:45:00',
      created: '2019-09-15T12:46:00',
      comments: [
        {
          id: '53534534',
          text: 'Consectetur adipiscing elit.',
          time: '2019-09-15T12:45:00'
        },
        {
          id: '87423443',
          text: 'Lorem ipsum dolor sit amet.',
          time: '2019-09-15T12:45:00'
        }
      ]
    },
    {
      date: '2019-09-12',
      type: 'bank',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '454564456',
      created: '2019-09-15T12:45:00'
    },
    {
      date: '2019-09-01',
      type: 'taxes',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '9769789645',
      created: '2019-09-15T12:45:00'
    }
  ]
  static getOne(id) {
    return find(this.collection, { id })
  }
  static getAll() {
    return this.collection
  }
  static putOne(id, event) {
    const oldEvent = find(this.collection, { id })
    const updatedEvent = {
      ...oldEvent,
      ...event,
      modified: moment().format()
    }

    this.collection = pull(this.collection, oldEvent)
    this.collection.push(updatedEvent)

    return updatedEvent
  }
  static postOne(event) {
    return this.collection.push({ id: generateId(), ...event, created: moment().format() })
  }
}
