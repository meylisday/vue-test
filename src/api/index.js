import findIndex from 'lodash-es/findIndex'

export class FetchAPI {
  static collection = [
    {
      date: '2019-09-10',
      type: 'taxes',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '1'
    },
    {
      date: '2019-09-12',
      type: 'bank',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '2'
    },
    {
      date: '2019-09-01',
      type: 'taxes',
      label: 'Отправить сведения о сделке',
      number: 'Номер',
      id: '3'
    }
  ]
  static getOne(id) {
    return find(this.collection, { id })
  }
  static getAll() {
    console.log(this.collection)
    return this.collection
  }
  static putOne(id, event) {
    const eventIndex = findIndex(this.collection, { id })
    this.collection[eventIndex] = event
    return event
  }
  static postOne(event) {
    console.log(event)
    return this.collection.push(event)
  }
}
