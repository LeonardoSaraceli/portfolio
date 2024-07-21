import Introduction from "./Introductions";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import "../assets/styles/Main.css";

export default function HomePage() {
  return (
    <main>
      <Introduction />

      <About />

      <Skills />

      <Work />

      <Contact />
    </main>
  );
}
