/* eslint-disable no-undef */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/Contact.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { useTranslation } from 'react-i18next'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Toast from './Toast'

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null)

  const { t } = useTranslation()

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setFormStatus(true)
          e.target.reset()
        },
        () => {
          setFormStatus(false)
        }
      )
    setTimeout(() => {
      setFormStatus(null)
    }, 5000)
  }

  return (
    <>
      <main id="contact">
        <section id="left-side">
          <h1 className="left-hidden">{t('get-in-touch')}</h1>

          <form className="left-hidden" ref={form} onSubmit={sendEmail}>
            <div id="name-email-inputs">
              <input
                type="text"
                name="from_name"
                placeholder={t('name')}
                autoComplete="name"
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="E-MAIL"
                autoComplete="email"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder={t('message')}
              required
            ></textarea>

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
                <span>+351 914 137 935</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      {formStatus !== null && (
        <Toast status={formStatus} setStatus={setFormStatus} />
      )}
    </>
  )
}
