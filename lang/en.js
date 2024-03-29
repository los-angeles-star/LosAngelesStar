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
    'dateline': {
      volume: 'Volume',
      vol: 'Vol.',
      number: 'Number',
      no: 'No.'
    },
    'article': {
      'excerpt': {
        read_more: 'Read more'
      },
      'dateline': {
        today: 'Today',
        updated: 'Updated'
      },
      'byline': {
        by: 'By '
      }
    }
  })
}
