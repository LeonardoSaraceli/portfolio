import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import omniloqDesktop from '../assets/images/allegrow-frontend.vercel.app.png'
import '../assets/styles/FirstProject.css'
import { useTranslation } from 'react-i18next'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function ThirdProject() {
  const { t } = useTranslation()

  return (
    <main className="first-project" id="projects">
      <section id="left-side">
        <div id="project-name" className="left-hidden">
          <h1>Allegrow</h1>

          <div id="project-links">
            <a
              href="https://allegrow-frontend.vercel.app/"
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
          href="https://allegrow-frontend.vercel.app/"
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
            <h1 className="right-hidden">{t('children')}</h1>

            <h2 className="right-hidden">{t('event')}</h2>
          </>
        )}

        <p className="right-hidden">{t('allegrow-description')}</p>

        <ul className="right-hidden">
          <li>
            <span>JavaScript</span>
          </li>

          <li>
            <span>React</span>
          </li>

          <li>
            <span>Express.js</span>
          </li>

          <li>
            <span>PostgreSQL</span>
          </li>

          <li>
            <span>Node.js</span>
          </li>
        </ul>
      </section>
    </main>
  )
}
