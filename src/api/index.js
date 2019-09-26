import axios from 'axios'

const isLocal = false
const host = isLocal ? 'http://localhost:8081' : 'https://swagger-server-test.herokuapp.com'

export class RemoteAPI {
  static async getEventById(id) {
    const response = await axios.get(`${host}/v2/event/${id}`)

    return response.data
  }

  static async getEvents() {
    const response = await axios.get(`${host}/v2/event`)

    return response.data
  }

  static async updateEvent(id, event) {
    const response = await axios.put(`${host}/v2/event/${id}`, event)

    return response.data
  }

  static async createEvent(event) {
    const response = await axios.post(`${host}/v2/event`, event)

    return response.data
  }

  static async deleteEvent(id) {
    const response = await axios.delete(`${host}/v2/event/${id}`)

    return response.data
  }

  static async createComment(id, comment) {
    const response = await axios.post(`${host}/v2/event/${id}/comment`, comment)

    return response.data
  }

  static async deleteComment(id, commentId) {
    const response = await axios.delete(`${host}/v2/event/${id}/comment/${commentId}`)

    return response.data
  }

  static async getSettings(type) {
    const response = await axios.get(`${host}/v2/settings/${type}`)

    return response.data
  }

  static async updateSettings(type, settings) {
    const response = await axios.put(`${host}/v2/settings/${type}`, settings)

    return response.data
  }
}
