import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/Contact.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <main id="contact">
      <section id="left-side">
        <h1 className="left-hidden">{t('get-in-touch')}</h1>

        <form className="left-hidden" onSubmit={(e) => e.preventDefault()}>
          <div id="name-email-inputs">
            <input
              type="text"
              name="name"
              placeholder={t('name')}
              autoComplete="name"
            />

            <input
              type="email"
              name="email"
              placeholder="E-MAIL"
              autoComplete="email"
            />
          </div>

          <textarea name="message" placeholder={t('message')}></textarea>

          <div id="dividor-btn">
            <div id="dividor"></div>

            <button type="submit">{t('submit')}</button>
          </div>
        </form>
      </section>

      <section id="right-side">
        <h1 className="right-hidden">{t('contact-info')}</h1>

        <ul className="right-hidden">
          <li>
            <a href="mailto:leonardolodi09@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />

              <span>leonardolodi09@gmail.com</span>
            </a>
          </li>

          <li>
            <a href="tel:+351914137935" target="_blank">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span>+351 914-137-935</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
