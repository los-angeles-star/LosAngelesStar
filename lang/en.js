export default async (context, locale) => {
  return await Promise.resolve({
    los_angeles: 'Los Angeles',
    home: 'Home',
    about: 'About',
    'weather': {
      'svg': {
        today: "Today's weather:"
      },
      current_temp: 'Current temperature:',
      high_temp: 'Today’s high temperature:',
      low_temp: 'Today’s low temperature:',
      degrees_f: 'degrees Fahrenheit'
    },
    'article': {
      'dateline': {
        today: 'Today',
        updated: 'Updated'
      }
    }
  })
}
