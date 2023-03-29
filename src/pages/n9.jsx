import Head from 'next/head'
import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { Container } from '@/components/Container'
import { Phototab } from '@/components/PhotoTab'
import { Reviews } from '@/components/Reviews'
import { SocialText } from '@/components/SocialLinks'

export default function About() {
  return (
    <>
      <Head>
        <title>N9+</title>
        <meta
          name="description"
          content="Hola, escribo código. Principalmente escribo C, C++ y C#. Diseñador y programador de videojuegos."
        />
        <meta
          name="keywords"
          content="videojuegos, desarrollador, murcia, españa, diseñador, csharp, portfolio, cpp, ninpl, nineplus"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="N9+" />
        <meta
          property="og:description"
          content="Hola, escribo código. Principalmente escribo C, C++ y C#. Diseñador y programador de videojuegos."
        />
        <meta
          property="og:image"
          content="https://ninpl.com/perfil/api/og?title=NinePlus - Diseñador y desarrollador de videojuegos"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ninpl.com" />
        <meta
          property="twitter:url"
          content="https://ninpl.com"
        />
        <meta name="twitter:title" content="N9+" />
        <meta
          name="twitter:description"
          content="Hola, escribo código. Principalmente escribo C, C++ y C#. Diseñador y programador de videojuegos."
        />
        <meta
          name="twitter:image"
          content="https://ninpl.com/perfil/api/og?title=NinePlus - Diseñador y desarrollador de videojuegos"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <motion.div
            className="lg:pl-20"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Phototab />
            </div>
          </motion.div>
          <div className="lg:order-first lg:row-span-2">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Balancer>
                {' '}
                NinePlus - Diseñador y desarrollador de videojuegos.
              </Balancer>
            </motion.h1>
            <motion.div
              className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <p>
              Hola, escribo código. Principalmente escribo C, C++ y C#. Diseñador
               y programador de videojuegos. Estoy aquí para escribir sobre el código
                que escribo. A veces es simple, a veces es complejo y, a veces, 
                simplemente es estúpido, pero si la gente dice que quiere leer cosas estúpidas,
                 que así sea.
              </p>
              <p>
                Una vida llena de errores no solo es más honorable, sino que es más 
                sabia que una vida gastada sin hacer nada. Por ello me gusta cometer
                errores y aprender de ellos como si de un camino de aprendizaje se 
                tratara.
              </p>
              <p>
                Me gusta la tecnología relacionada con redes, leer libros/novelas de
                alta fantasía, programación gráfica, los animes de aventura y fantasía,
                los videojuegos, sobre todo RPG y tácticos, el whisky escoces y los 
                deportes de escalada.
              </p>
              <p>
              Mi lema es: el trabajo duro supera al talento cuando el talento no trabaja duro. 
              </p>
            </motion.div>
          </div>
          <SocialText />
        </div>
        <Reviews />
      </Container>
    </>
  )
}
