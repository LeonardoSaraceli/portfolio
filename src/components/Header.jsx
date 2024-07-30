import ukFlag from '../assets/images/uk-flag.svg'
import lightTheme from '../assets/images/light-theme.svg'
import '../assets/styles/Header.css'

export default function Header() {
  return (
    <header>
      <nav>
        <picture>
          <img src={ukFlag} alt="UK flag" className="header-icon" />
          <p>EN</p>
        </picture>

        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>

        <div id="header-btns">
          <span>RESUME</span>

          <button>
            <img src={lightTheme} alt="Sun icon" className="header-icon" />
          </button>
        </div>
      </nav>
    </header>
  )
}
