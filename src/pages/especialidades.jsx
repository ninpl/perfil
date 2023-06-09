import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { stacks } from '@/data/stacks'
import { Switch } from '@headlessui/react'
import { motion } from 'framer-motion'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { Card } from '@/components/Card'
import { Pill } from '@/components/Pill'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function filterStacks(stacks, type) {
  return stacks.filter((stack) => stack.type === type)
}

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}
function ToolsSectionGrid({ children, title }) {
  return (
    <section className="md:border-l md:border-zinc-900/10 md:pl-6 md:dark:border-white/10">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
        {title}
      </h2>
      <ul
        role="list"
        className="grid grid-cols-3 mt-5 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8"
      >
        {children}
      </ul>
    </section>
  )
}

function Toollist({ title, href, children, pills }) {
  return (
    <Card as="li" className="relative z-10">
      <Card.Title
        as="div"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {title}{' '}
        {pills && (
          <div className="inline-flex flex-wrap gap-2 ml-1">
            {pills.map((pill) => (
              <Pill key={pill.name} variant={pill.name} />
            ))}
          </div>
        )}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}
function Toolgrid({ title, href, img, children, pills }) {
  return (
    <li className="relative z-10 group">
      <div className="block w-full p-3 overflow-hidden transition-transform duration-700 border rounded-lg aspect-w-10 aspect-h-7 group border-zinc-900/10 bg-white/10 backdrop-blur-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 dark:border-white/10 dark:bg-zinc-900/20 dark:backdrop-blur group-hover:scale-105">
        <Image
          src={img}
          alt={title}
          placeholder="blur"
          width={70}
          height={70}
          className="object-cover mx-auto transition-transform duration-700 pointer-events-none group-hover:opacity-75 group-hover:scale-105"
        />
        <Link
          href={href}
          type="button"
          className="absolute inset-0 focus:outline-none"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="sr-only">Ver {title}</span>
        </Link>
        <p className="block my-2 text-sm font-medium text-center truncate pointer-events-none text-zinc-900 dark:text-white">
          {children}
        </p>
        {pills && (
          <div className="absolute inline-flex items-center justify-between gap-2 inset-x-1 top-1 ">
            {pills.map((pill) => (
              <Pill key={pill.name} variant={pill.name} />
            ))}
          </div>
        )}
      </div>
    </li>
  )
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Uses() {
  const development = filterStacks(stacks, 'dis')
  const workstation = filterStacks(stacks, 'des')
  const design = filterStacks(stacks, 'art')
  const productivity = filterStacks(stacks, 'otr')

  const [view, setView] = useState('grid')
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <Head>
        <title>Especialidades - N9+</title>
        <meta
          name="description"
          content="Especialidades que domino."
        />
        <meta
          name="keywords"
          content="videojuegos, desarrollador, murcia, españa, diseñador, csharp, portfolio, cpp, ninpl, nineplus"
        />
        <meta
          property="og:url"
          content="https://ninpl.com"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Especialidades - N9+" />
        <meta
          property="og:description"
          content="Especialidades que domino."
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
        <meta name="twitter:title" content="Especialidades - N9+" />
        <meta
          name="twitter:description"
          content="Especialidades que domino."
        />
        <meta
          name="twitter:image"
          content="https://ninpl.com/perfil/api/og?title=NinePlus - Diseñador y desarrollador de videojuegos"
        />
      </Head>
      <SimpleLayout
        title="Especialidades que domino"
        intro="Algunos proyectos extra como desarrollador, diseñador de niveles, artista gráfico y vfx entre otras cosas."
      >
        <motion.div
          className="relative z-20 flex items-center justify-start gap-4 px-4 py-2 my-16 border dark:backdrop-blurbackdrop-blur w-fit rounded-3xl border-zinc-900/10 bg-white/10 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          layout
        >
          <span>Vista</span>
          <Switch
            checked={enabled}
            onChange={() => {
              setView(view === 'list' ? 'grid' : 'list')
              setEnabled(!enabled)
            }}
            className={classNames(
              enabled ? 'bg-amber-600' : 'bg-zinc-400/60 dark:bg-zinc-700',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              className={classNames(
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            >
              <span
                className={classNames(
                  enabled
                    ? 'opacity-0 duration-100 ease-out'
                    : 'opacity-100 duration-200 ease-in',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                )}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-gray-400 dark:text-zinc-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <span
                className={classNames(
                  enabled
                    ? 'opacity-100 duration-200 ease-in'
                    : 'opacity-0 duration-100 ease-out',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                )}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-amber-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </span>
            </span>
          </Switch>
        </motion.div>
        {view === 'list' ? (
          <div className="space-y-20">
            <ToolsSection title="Desarrollador">
              {workstation.map((stack) => (
                <Toollist
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  pills={stack.pills}
                >
                  {stack.info}
                </Toollist>
              ))}
            </ToolsSection>
            <ToolsSection title="Diseño de Niveles">
              {development.map((stack) => (
                <Toollist
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  pills={stack.pills}
                >
                  {stack.info}
                </Toollist>
              ))}
            </ToolsSection>
            <ToolsSection title="Arte">
              {design.map((stack) => (
                <Toollist
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  pills={stack.pills}
                >
                  {stack.info}
                </Toollist>
              ))}
            </ToolsSection>
            <ToolsSection title="Otros">
              {productivity.map((stack) => (
                <Toollist
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  pills={stack.pills}
                >
                  {stack.info}
                </Toollist>
              ))}
            </ToolsSection>
          </div>
        ) : (
          <div className="space-y-20">
            <ToolsSectionGrid title="Desarrollador">
              {workstation.map((stack) => (
                <Toolgrid
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  img={stack.img}
                  pills={stack.pills}
                >
                  {stack.title}
                </Toolgrid>
              ))}
            </ToolsSectionGrid>
            <ToolsSectionGrid title="Diseño de Niveles">
              {development.map((stack) => (
                <Toolgrid
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  img={stack.img}
                  pills={stack.pills}
                >
                  {stack.title}
                </Toolgrid>
              ))}
            </ToolsSectionGrid>
            <ToolsSectionGrid title="Arte">
              {design.map((stack) => (
                <Toolgrid
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  img={stack.img}
                  pills={stack.pills}
                >
                  {stack.title}
                </Toolgrid>
              ))}
            </ToolsSectionGrid>
            <ToolsSectionGrid title="Otros">
              {productivity.map((stack) => (
                <Toolgrid
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  img={stack.img}
                  pills={stack.pills}
                >
                  {stack.title}
                </Toolgrid>
              ))}
            </ToolsSectionGrid>
          </div>
        )}
      </SimpleLayout>
    </>
  )
}
