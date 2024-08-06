import profile from '../assets/images/profile.png'
import '../assets/styles/Home.css'

export default function Home() {
  return (
    <main id="home">
      <picture>
        <img src={profile} alt="Profile picture" />
      </picture>

      <section id="left-side">
        <h1 className="left-hidden">FULL-STACK</h1>

        <h2 className="left-hidden">WEB DEVELOPER</h2>

        <p className="left-hidden">
          Do you have any ideas? Then I will be committed to creating it.
        </p>
      </section>

      <section id="right-side">
        <h1 className="right-hidden">LEONARDO</h1>

        <h2 className="right-hidden">LODI</h2>

        <p className="right-hidden">
          Based in Porto, <span>Portugal</span> (UTC+1)
        </p>
      </section>
    </main>
  )
}
