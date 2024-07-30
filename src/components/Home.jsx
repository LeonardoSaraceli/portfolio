import profile from '../assets/images/profile.png'
import '../assets/styles/Home.css'

export default function Home() {
  return (
    <main id="home">
      <picture>
        <img src={profile} alt="Profile picture" />
      </picture>

      <section id="left-side">
        <h1>FULL-STACK</h1>

        <h2>
          WEB DEVELOPER<span>.</span>
        </h2>

        <p>Do you have any ideas? Then I will be committed to creating it.</p>
      </section>

      <section id="right-side">
        <h1>LEONARDO</h1>

        <h2>LODI.</h2>

        <p>
          Based in Porto, <span>Portugal</span> (UTC+1)
        </p>
      </section>
    </main>
  )
}
