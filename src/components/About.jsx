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

export default function About() {
  return (
    <main id="about">
      <section id="left-side">
        <h1>ME IN A NUTSHELL</h1>

        <p>
          I am an extrovert who loves chess and computers. When programming, I
          always seek to deliver the best possible experience and visuals to the
          user. Recently graduated from the Boolean bootcamp, I learned the
          essentials for creating a web application in its entirety. I've had
          excellent teamwork experiences and continue to learn more and more
          every time I meet a new developer.
        </p>
      </section>

      <section id="right-side">
        <h1>TECH STACK</h1>

        <ul>
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
