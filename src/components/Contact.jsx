import email from '../assets/images/email.svg'
import phone from '../assets/images/phone.svg'
import '../assets/styles/Contact.css'

export default function Contact() {
  return (
    <main id="contact">
      <section id="left-side">
        <h1>GET IN TOUCH</h1>

        <form onSubmit={(e) => e.preventDefault()}>
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
        <h1>CONTACT INFO</h1>

        <ul>
          <li>
            <img src={email} alt="E-mail icon" />

            <p>
              <a href="mailto:leonardolodi09@gmail.com">
                leonardolodi09@gmail.com
              </a>
            </p>
          </li>

          <li>
            <img src={phone} alt="Phone icon" />

            <p>
              <a href="tel:+351914137935">+351 914-137-935</a>
            </p>
          </li>
        </ul>
      </section>
    </main>
  )
}
