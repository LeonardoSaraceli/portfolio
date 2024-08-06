/* eslint-disable react/no-unescaped-entities */
import '../assets/styles/About.css'
import css from '../assets/images/css.svg'
import express from '../assets/images/express.svg'
import git from '../assets/images/git.svg'
import html from '../assets/images/html.svg'
import javascript from '../assets/images/javascript.svg'
import node from '../assets/images/node.svg'
import postgresql from '../assets/images/postgresql.svg'
import prisma from '../assets/images/prisma.svg'
import react from '../assets/images/react.svg'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <main id="about">
      <section id="left-side">
        <h1 className="left-hidden">{t('me-in-a-nutshell')}</h1>

        <p className="left-hidden">{t('about-left-text')}</p>
      </section>

      <section id="right-side">
        <h1 className="right-hidden">{t('tech-stack')}</h1>

        <ul className="right-hidden">
          <li>
            <img src={javascript} alt="Javascript icon" />
          </li>

          <li>
            <img src={react} alt="React icon" />
          </li>

          <li>
            <img src={css} alt="CSS icon" />
          </li>

          <li>
            <img src={prisma} alt="Prisma icon" />
          </li>

          <li>
            <img src={git} alt="Git icon" />
          </li>

          <li>
            <img src={postgresql} alt="PostgreSQL icon" />
          </li>

          <li>
            <img src={html} alt="HTML icon" />
          </li>

          <li>
            <img src={node} alt="Node icon" />
          </li>

          <li>
            <img src={express} alt="Express icon" />
          </li>
        </ul>
      </section>
    </main>
  )
}
