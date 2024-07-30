import ukFlag from '../assets/images/uk-flag.svg'
import lightTheme from '../assets/images/light-theme.svg'
import '../assets/styles/Header.css'
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('header nav')
      const div = document.querySelector('header #header-btns')

      if (window.scrollY > 100) {
        nav.classList.add('scrolled')
        div.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
        div.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      </nav>

      <div id="header-btns">
        <span>RESUME</span>

        <button>
          <img src={lightTheme} alt="Sun icon" className="header-icon" />
        </button>
      </div>
    </header>
  )
}
