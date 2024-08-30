import '../assets/styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer>
      <nav id="footer-left-side">
        <div id="follow-me" className="left-hidden">
          <h1>{t('follow')}</h1>

          <h2>{t('me')}</h2>
        </div>

        <ul className="left-hidden">
          <li>
            <a href="https://github.com/LeonardoSaraceli" target="_blank">
              <FontAwesomeIcon icon={faGithubAlt} className="footer-icon" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/leonardo-saraceli-almeida-lodi/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="footer-icon" />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/leonardolodi_/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
            </a>
          </li>
        </ul>
      </nav>

      <section id="footer-right-side">
        <div className="right-hidden">
          <h1>{t('designed-and')}</h1>

          <h2>{t('developed-by')}</h2>
        </div>

        <a href="#home" className="right-hidden">
          <div id="lodi-logo">
            <span>LO</span>

            <span>DI</span>
          </div>
        </a>
      </section>
    </footer>
  )
}
