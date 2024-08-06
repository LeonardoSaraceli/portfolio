import '../assets/styles/Header.css'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

export default function Header() {
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
    <>
      <header>
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
            <span>{language === 'en' ? "En" : "Pt"}</span>
          </picture>
        </div>
      </header>
    </>
  )
}
