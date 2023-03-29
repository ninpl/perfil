import logoDungeonQuest from '@/images/logos/circular/rush.png'
import logoSweet from '@/images/logos/circular/sweet.png'
import logoOrigen from '@/images/logos/circular/origen.png'
import logoAssault from '@/images/logos/circular/assault.png'
import logoHorizon from '@/images/logos/circular/horizon.png'

export const resume = [
  {
    company: 'The Legend of Origen',
    title: 'RPG Táctico con un estilo artístico anime',
    logo: logoOrigen,
    start: '2015',
    end: {
      label: 'Presente',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Dungeon Quest Rush',
    title: 'Estrategia en mazmorras roguelike',
    logo: logoDungeonQuest,
    start: '2018',
    end: '2020',
  },
  {
    company: 'Horizon Crystal',
    title: '3 Match, ambientado con cristales elementales',
    logo: logoHorizon,
    start: '2016',
    end: '2017',
  },
  {
    company: 'Sweet Village',
    title: '3 Match, ambientado con golosinas',
    logo: logoSweet,
    start: '2016',
    end: '2016',
  },
  {
    company: 'Earth Assault',
    title: 'Control orbital click pointer',
    logo: logoAssault,
    start: '2015',
    end: '2015',
  },
]
