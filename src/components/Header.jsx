import '../assets/styles/Header.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faFileArrowDown,
  faGlobe,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import leonardoLodiCV from '../assets/files/Leonardo Lodi CV.pdf'

export default function Header() {
  const [asideVisible, setAsideVisible] = useState(false)
  const ref = useRef(null)

  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()

  const toggleLanguage = useCallback(() => {
    const newLanguage = language === 'en' ? 'pt' : 'en'
    localStorage.setItem('lng', newLanguage)
    changeLanguage(newLanguage)
    setAsideVisible(false)
  }, [language, changeLanguage])

  const handleScroll = useCallback(() => {
    const menu = document.querySelector('#menu-mobile')
    const nav = document.querySelector('header nav')
    const div = document.querySelector('header #header-btns')

    if (window.scrollY > 100) {
      menu?.classList.add('scrolled')
      nav.classList.add('scrolled')
      div.classList.add('scrolled')
    } else {
      menu?.classList.remove('scrolled')
      nav.classList.remove('scrolled')
      div.classList.remove('scrolled')
    }
  }, [])

  const handleEventOutside = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setAsideVisible(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleEventOutside)
    document.addEventListener('scroll', handleEventOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleEventOutside)
      document.removeEventListener('scroll', handleEventOutside)
    }
  }, [handleScroll, handleEventOutside])

  return (
    <>
      <header id={window.outerWidth <= 1279 ? 'menu-mobile' : ''}>
        <nav>
          <ul>
            <li>
              <a href="#home">{t('home')}</a>
            </li>

            <li>
              <a href="#about">{t('about')}</a>
            </li>

            <li>
              <a href="#projects">{t('projects')}</a>
            </li>

            <li>
              <a href="#contact">{t('contact')}</a>
            </li>
          </ul>
        </nav>

        <div id="header-btns">
          <a href={leonardoLodiCV} download="Leonardo Lodi CV">
            <picture>
              <FontAwesomeIcon icon={faFileArrowDown} className="header-icon" />
              <span>CV</span>
            </picture>
          </a>

          <picture onClick={toggleLanguage}>
            <FontAwesomeIcon icon={faGlobe} className="header-icon" />
            <span>{language === 'en' ? 'En' : 'Pt'}</span>
          </picture>
        </div>

        {window.outerWidth < 1280 && (
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
              <a href="#projects">{t('projects')}</a>
            </li>

            <li onClick={() => setAsideVisible(false)}>
              <a href="#contact">{t('contact')}</a>
            </li>

            <a href={leonardoLodiCV} download="Leonardo Lodi CV">
              <li className="menu">
                <FontAwesomeIcon icon={faFileArrowDown} className="icon" />
                <span>CV</span>
              </li>
            </a>

            <li className="menu" onClick={toggleLanguage}>
              <FontAwesomeIcon icon={faGlobe} className="icon" />
              <span>{language === 'en' ? 'En' : 'Pt'}</span>
            </li>
          </ul>
        </aside>
      )}
    </>
  )
}
