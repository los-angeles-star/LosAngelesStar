import Vue from "vue"
import dayjs from 'dayjs'

Vue.filter("formatDate", value => {
  return new Date(value).toISOString('en-US', {
    timeZone: 'America/Los_Angeles'
  })
})

Vue.filter("currentDate", value => {
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Los_Angeles'
  })
})

Vue.filter("formatDateDay", value => {
  return dayjs(value).format('dddd, MMMM D, YYYY');
})
