import {
  Github,
  Gitlab,
  Trello,
  Mail,
  Scroll,
} from 'lucide-react'

export const generalLinks = [
  {
    href: 'https://ninpl.com/perfil/n9',
    label: 'N9+',
  },
  {
    href: 'https://ninpl.com/',
    label: 'Blog',
    target: '_blank',
  },
  {
    href: 'https://ninpl.com/perfil/proyectos',
    label: 'Proyectos',
  },
  {
    href: 'https://ninpl.com/perfil/especialidades',
    label: 'Especialidades',
  }, 
  {
    href: 'https://nerve-link.com/',
    label: 'NerveLink',
    target: '_blank',
  },
  {
    href: '/rss/feed.xml',
    label: 'Rss',
  },
]

export const linksSocial = [
  {
    href: 'https://github.com/ninpl',
    icon: Github,
    label: 'Seguir en GitHub',
    outline: true,
  },
  {
    href: 'https://gitlab.com/ninpl',
    icon: Gitlab,
    label: 'Seguir en Gitlab',
    outline: true,
  },
  {
    href: 'https://trello.com/u/ninpl',
    icon: Trello,
    label: 'Seguir en Trello',
    outline: true,
  },
  {
    href: 'https://ninpl.com/',
    icon: Scroll,
    label: 'Leer',
    outline: true,
  },
  {
    href: 'mailto:nineplus.n9p@gmail.com',
    icon: Mail,
    label: 'Enviar Correo',
    outline: true,
  },
]
