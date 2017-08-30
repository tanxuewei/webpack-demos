import Vue from './vue.js'

let vm = new Vue({
  el: '#app',
  data: {
    name: 'shirley',
    money: {
      work: '100万',
      house: '500万',
      car: '10万'
    }
  },
  template (data) {
    return `<h1>${data.name}</h1><h2>${data.money.car}</h2>`
  },
  events: {
    
  }
})
vm.$watch('name', () => console.log('name is changed'))
vm.$watch('money', () => console.log('money is changed'))
window.vm = vm