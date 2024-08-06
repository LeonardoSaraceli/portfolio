import { useTranslation } from 'react-i18next'
import profile from '../assets/images/profile.png'
import '../assets/styles/Home.css'

export default function Home() {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  return (
    <main id="home">
      <picture id="profile-icon">
        <img src={profile} alt="Profile picture" />
      </picture>

      <section id="left-side">
        <h1 className="left-hidden">
          {language === 'en' ? t('full-stack') : t('web-developer')}
        </h1>

        <h2 className="left-hidden">
          {language === 'en' ? t('web-developer') : t('full-stack')}
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
