<template>
  <div>
    <h1>Настройки секции <b>Клиенты</b></h1>
    <div class="list-wrapper">
      <div class="search">
        <b-field>
          <b-input v-model="search" placeholder="Поиск контактов" type="search" icon="magnify"> </b-input>
        </b-field>
      </div>
      <div class="list-title">
        <span>Контакты (n)</span>
      </div>
      <div class="items-list-wrapper">
        <div v-for="person in contacts" :key="person.number" class="items-list">
          <div class="items-list-details">
            <div class="items-list-details--picture">
              <contact-avatar :person-name="person.name" />
            </div>
            <div class="items-list-details--name">{{ person.name }}</div>
          </div>
          <div class="list-number">{{ person.number }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactAvatar from '@/components/ContactAvatar'
export default {
  name: 'ClientsTab',
  components: {
    ContactAvatar
  },
  data() {
    return {
      search: '',
      contacts: [
        { name: 'Артем', number: '+2345254233' },
        { name: 'Сергей', number: '+234322555233' },
        { name: 'Елена', number: '+2343225333' },
        { name: 'Александр', number: '+2342252225233' },
        { name: 'Анастасия', number: '+23425215253' },
        { name: 'Влад', number: '+23425358233' },
        { name: 'Роман', number: '+234225725433' },
        { name: 'Андрей', number: '+23425255253' },
        { name: 'Ahntv', number: '+2343225025263' },
        { name: 'Ahntv', number: '+23422525002t3' }
      ]
    }
  }
}
</script>
<style scoped>
.list-wrapper {
  width: 600px;
  margin: auto;
  margin-top: 1em;
}
.items-list {
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
}
.items-list-details {
  display: flex;
  flex-direction: row;
}
.items-list-details--name {
  line-height: 1.9;
  margin-left: 12px;
}
h1 {
  margin-top: 40px;
  font-size: 20px;
  line-height: 23px;
}
.search {
  margin-top: 48px;
}
.list-title {
  margin-top: 24px;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #8c8f97;
}
.items-list-wrapper {
  margin-top: 24px;
}
</style>
