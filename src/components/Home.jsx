import { useTranslation } from 'react-i18next'
import profileDesktop from '../assets/images/profile-desktop.png'
import profileMobile from '../assets/images/profile-mobile.png'
import '../assets/styles/Home.css'

export default function Home() {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  return (
    <main id="home">
      <picture id="profile-icon">
        <img
          src={window.outerWidth >= 1280 ? profileDesktop : profileMobile}
          alt="Profile picture"
          loading="lazy"
        />
      </picture>

      <section id="left-side">
        <h1 className="left-hidden">
          {language === 'en' ? t('full-stack') : t('developer')}
        </h1>

        <h2 className="left-hidden">
          {language === 'en' ? t('developer') : t('full-stack')}
        </h2>

        <p className="left-hidden">{t('home-left-text')}</p>
      </section>

      <section id="right-side">
        <h1 className="right-hidden">LEONARDO</h1>

        <h2 className="right-hidden">LODI</h2>

        <p className="right-hidden">
          {t('based-in')} Porto, <span>Portugal</span> (UTC+1)
        </p>
      </section>
    </main>
  )
}
