import '../assets/styles/Header.css'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown, faGlobe } from '@fortawesome/free-solid-svg-icons'

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
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div id="header-btns">
        <picture>
          <FontAwesomeIcon icon={faFileArrowDown} className="header-icon" />
          <span>Resume</span>
        </picture>

        <picture>
          <FontAwesomeIcon icon={faGlobe} className="header-icon" />
          <span>En</span>
        </picture>
      </div>
    </header>
  )
}
