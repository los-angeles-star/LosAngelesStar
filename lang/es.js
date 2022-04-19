export default async (context, locale) => {
  return await Promise.resolve({
    los_angeles: 'Los Ángeles',
    home: 'Inicio',
    about: 'Sobre',
    'weather': {
      'svg': {
        today: "El clima de hoy:"
      },
      current_temp: 'La temperatura de ora:',
      high_temp: 'La temperatura alta de hoy:',
      low_temp: 'La temperatura baja de hoy:',
      degrees_f: 'grados Fahrenheit'
    },
    'dateline': {
      volume: 'Volumen',
      vol: 'Vol.',
      number: 'Número',
      no: 'N.º'
    },
    'article': {
      'dateline': {
        today: 'Hoy',
        updated: 'Actualizado'
      }
    }
  })
}
