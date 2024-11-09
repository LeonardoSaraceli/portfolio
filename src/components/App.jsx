import { useEffect } from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import '../assets/styles/App.css'
import FirstProject from './FirstProject'
import SecondProject from './SecondProject'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          observer.unobserve(entry.target)
        }
      })
    })

    const elementsToObserve = document.querySelectorAll(
      '.left-hidden, .right-hidden'
    )

    elementsToObserve.forEach((el) => observer.observe(el))

    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <Header />

      <Home />

      <About />

      <FirstProject />

      <SecondProject />

      <Contact />

      <Footer />
    </>
  )
}

export default App
