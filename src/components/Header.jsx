import { faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/Header.css"

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <span>En</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faSun} className="fa" />
        </li>
      </ul>
    </header>
  );
}
