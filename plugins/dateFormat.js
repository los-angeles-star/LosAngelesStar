import Vue from "vue"

Vue.filter("formatDate", value => {
  return new Date(value).toISOString('en-US', {
    timeZone: 'America/Los_Angeles'
  })
})
