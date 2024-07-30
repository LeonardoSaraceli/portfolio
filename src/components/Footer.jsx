import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'
import instagram from '../assets/images/instagram.svg'
import '../assets/styles/Footer.css'

export default function Footer() {
  return (
    <footer>
      <nav id="footer-left-side">
        <div id="follow-me">
          <h1>FOLLOW</h1>

          <h2>
            ME<span>.</span>
          </h2>
        </div>

        <ul>
          <li>
            <a href="https://github.com/LeonardoSaraceli" target="_blank">
              <img src={github} alt="Github icon" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/leo-lodi/" target="_blank">
              <img src={linkedin} alt="Linkedin icon" />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/leonardolodi_/" target="_blank">
              <img src={instagram} alt="Instagram icon" />
            </a>
          </li>
        </ul>
      </nav>

      <section id="footer-right-side">
        <div>
          <h1>DESIGNED AND</h1>

          <h2>DEVELOPED BY</h2>
        </div>

        <a href="#home">
          <div id="lodi-logo">
            <span>LO</span>

            <span id="final-lodi-logo">DI</span>
          </div>
        </a>
      </section>
    </footer>
  )
}
