import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/Aside.css"

export default function Aside() {
  return (
    <aside>
      <ul>
        <li>
          <a href="#introduction">
            <span>Home</span>
          </a>
        </li>

        <li>
          <a href="#about">
            <span>About</span>
          </a>
        </li>

        <li>
          <a href="#skills">
            <span>Skills</span>
          </a>
        </li>

        <li>
          <a href="#work">
            <span>Work</span>
          </a>
        </li>

        <li>
          <a href="#contact">
            <span>Contact</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/LeonardoSaraceli" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="fa" />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/leo-lodi/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="fa" />
          </a>
        </li>
      </ul>
    </aside>
  );
}
