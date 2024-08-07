import '../assets/styles/Header.css'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faFileArrowDown,
  faGlobe,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const [asideVisible, setAsideVisible] = useState(false)
  const ref = useRef(null)

  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()

  const handleChangeLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en'
    localStorage.setItem('lng', newLanguage)
    changeLanguage(newLanguage)
  }

  useEffect(() => {
    const handleScroll = () => {
      const menu = document.querySelector('#menu-mobile')
      const nav = document.querySelector('header nav')
      const div = document.querySelector('header #header-btns')

      if (window.scrollY > 100) {
        if (menu !== null) {
          menu.classList.add('scrolled')
        }

        nav.classList.add('scrolled')
        div.classList.add('scrolled')
      } else {
        if (menu !== null) {
          menu.classList.remove('scrolled')
        }

        nav.classList.remove('scrolled')
        div.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  })

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setAsideVisible(false)
    }
  }

  return (
    <>
      <header id={window.innerWidth <= 1023 ? 'menu-mobile' : ''}>
        <nav>
          <ul>
            <li>
              <a href="#home">{t('home')}</a>
            </li>
            <li>
              <a href="#about">{t('about')}</a>
            </li>
            <li>
              <a href="#contact">{t('contact')}</a>
            </li>
          </ul>
        </nav>

        <div id="header-btns">
          <picture>
            <FontAwesomeIcon icon={faFileArrowDown} className="header-icon" />
            <span>{t('resume')}</span>
          </picture>

          <picture onClick={handleChangeLanguage}>
            <FontAwesomeIcon icon={faGlobe} className="header-icon" />
            <span>{language === 'en' ? 'En' : 'Pt'}</span>
          </picture>
        </div>

        {window.innerWidth < 1024 && (
          <FontAwesomeIcon
            icon={faBars}
            id="bars-icon"
            onClick={() => setAsideVisible(true)}
          />
        )}
      </header>

      {asideVisible && (
        <aside id="hamburguer" ref={ref}>
          <FontAwesomeIcon
            icon={faXmark}
            id="x-mark"
            onClick={() => setAsideVisible(false)}
          />

          <ul>
            <li onClick={() => setAsideVisible(false)}>
              <a href="#home">{t('home')}</a>
            </li>

            <li onClick={() => setAsideVisible(false)}>
              <a href="#about">{t('about')}</a>
            </li>

            <li onClick={() => setAsideVisible(false)}>
              <a href="#contact">{t('contact')}</a>
            </li>

            <li className="menu">
              <FontAwesomeIcon icon={faFileArrowDown} className="icon" />
              <span>{t('resume')}</span>
            </li>

            <li className="menu" onClick={handleChangeLanguage}>
              <FontAwesomeIcon icon={faGlobe} className="icon" />
              <span>{language === 'en' ? 'En' : 'Pt'}</span>
            </li>
          </ul>
        </aside>
      )}
    </>
  )
}
