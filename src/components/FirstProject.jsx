import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import omniloqDesktop from '../assets/images/omniloq-desktop.png'
import '../assets/styles/FirstProject.css'
import { useTranslation } from 'react-i18next'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function FirstProject() {
  const { t } = useTranslation()

  return (
    <main className="first-project" id="projects">
      <section id="left-side">
        <div id="project-name" className="left-hidden">
          <h1>OMNILOQ</h1>

          <div id="project-links">
            <a
              href="https://github.com/LeonardoSaraceli/omniloq-frontend"
              target="_blank"
              className="link"
            >
              <span>Front end</span>

              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://github.com/LeonardoSaraceli/omniloq-backend"
              target="_blank"
              className="link"
            >
              <span>Back end</span>

              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://omniloq-frontend.vercel.app/"
              target="_blank"
              className="link"
            >
              <span>{t('live-app')}</span>

              <FontAwesomeIcon icon={faArrowRight} id="arrow-icon" />
            </a>
          </div>
        </div>

        <a
          className="left-hidden"
          href="https://omniloq-frontend.vercel.app/"
          target="_blank"
        >
          <img src={omniloqDesktop} alt="Omniloq desktop" loading="lazy" />
        </a>
      </section>

      <section id="right-side">
        {window.outerWidth <= 1279 && (
          <h1 className="right-hidden">
            {t('password')} {t('manager')}
          </h1>
        )}

        {window.outerWidth > 1279 && (
          <>
            <h1 className="right-hidden">{t('password')}</h1>

            <h2 className="right-hidden">{t('manager')}</h2>
          </>
        )}

        <p className="right-hidden">{t('omniloq-description')}</p>

        <ul className="right-hidden">
          <li>
            <span>JavaScript</span>
          </li>

          <li>
            <span>React</span>
          </li>

          <li>
            <span>Express</span>
          </li>

          <li>
            <span>PostgreSQL</span>
          </li>

          <li>
            <span>Node.js</span>
          </li>

          <li>
            <span>Prisma</span>
          </li>
        </ul>
      </section>
    </main>
  )
}
