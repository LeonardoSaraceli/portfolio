import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import funcionarioLeads from '../assets/images/funcionario-leads.png'
import '../assets/styles/FirstProject.css'
import { useTranslation } from 'react-i18next'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function SecondProject() {
  const { t } = useTranslation()

  return (
    <main className="first-project" id="projects">
      <section id="left-side">
        <div id="project-name" className="left-hidden">
          <h1>Wizard ON</h1>

          <div id="project-links-second">
            <a
              href="https://github.com/LeonardoSaraceli/wizard-on"
              target="_blank"
              className="link"
            >
              <span>{t('repo')}</span>

              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://wizard-on.vercel.app/"
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
          href="https://wizard-on.vercel.app/"
          target="_blank"
        >
          <img src={funcionarioLeads} alt="Omniloq desktop" loading="lazy" />
        </a>
      </section>

      <section id="right-side">
        {window.outerWidth <= 1279 && (
          <h1 className="right-hidden">
            {t('wizard')} {t('on')}
          </h1>
        )}

        {window.outerWidth > 1279 && (
          <>
            <h1 className="right-hidden">{t('wizard')}</h1>

            <h2 className="right-hidden">{t('on')}</h2>
          </>
        )}

        <p className="right-hidden">{t('wizard-description')}</p>

        <ul className="right-hidden">
          <li>
            <span>Next.js</span>
          </li>

          <li>
            <span>TypeScript</span>
          </li>

          <li>
            <span>Node.js</span>
          </li>

          <li>
            <span>PostgreSQL</span>
          </li>
        </ul>
      </section>
    </main>
  )
}
