import dayjs from 'dayjs'

const nuxtApp = useNuxtApp()

nuxtApp.config.globalProperties.$filters = {
  formatDate(value) {
    return new Date(value).toISOString('en-US', {
      timeZone: 'America/Los_Angeles'
    })
  }

  currentDate(value) {
    return new Date(value).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Los_Angeles'
    })
  }

  formatDateDay(value) {
    return dayjs(value).format('dddd, MMMM D, YYYY');
  }
}
