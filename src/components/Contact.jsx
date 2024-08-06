import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/Contact.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Contact() {
  return (
    <main id="contact">
      <section id="left-side">
        <h1 className="left-hidden">GET IN TOUCH</h1>

        <form className="left-hidden" onSubmit={(e) => e.preventDefault()}>
          <div id="name-email-inputs">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              autoComplete="name"
            />

            <input
              type="email"
              name="email"
              placeholder="E-MAIL"
              autoComplete="email"
            />
          </div>

          <textarea name="message" placeholder="MESSAGE"></textarea>

          <div id="dividor-btn">
            <div id="dividor"></div>

            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </section>

      <section id="right-side">
        <h1 className="right-hidden">CONTACT INFO</h1>

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
