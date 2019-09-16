import findIndex from 'lodash-es/findIndex'
import find from 'lodash-es/find'
import moment from 'moment'

export class FetchAPI {
  static collection = [
    {
      date: '2019-09-10',
      type: 'taxes',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '1',
      modified: '2019-09-15T12:45:00',
      created: '2019-09-15T12:45:00',
      comments: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '2019-09-15T12:45:00' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '2019-09-15T12:45:00' }
      ]
    },
    {
      date: '2019-09-12',
      type: 'bank',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '2',
      created: '2019-09-15T12:45:00'
    },
    {
      date: '2019-09-01',
      type: 'taxes',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '3',
      created: '2019-09-15T12:45:00'
    }
  ]
  static getOne(id) {
    return find(this.collection, { id })
  }
  static getAll() {
    //console.log(this.collection)
    return this.collection
  }
  static putOne(id, event) {
    const eventIndex = findIndex(this.collection, { id })
    this.collection[eventIndex] = { ...event, modified: moment().format() }
    return event
  }
  static postOne(event) {
    console.log(event)
    return this.collection.push({ ...event, created: moment().format() })
  }
}
