import '../assets/styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <nav id="footer-left-side">
        <div id="follow-me" className="left-hidden">
          <h1>FOLLOW</h1>

          <h2>ME</h2>
        </div>

        <ul className="left-hidden">
          <li>
            <a href="https://github.com/LeonardoSaraceli" target="_blank">
              <FontAwesomeIcon icon={faGithubAlt} className="footer-icon" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/leo-lodi/" target="_blank">
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
          <h1>DESIGNED AND</h1>

          <h2>DEVELOPED BY</h2>
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
