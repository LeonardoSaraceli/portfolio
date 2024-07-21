/* eslint-disable react/no-unescaped-entities */
import icon from "../assets/images/icon.jpg";
import javascriptIcon from "../assets/images/javascript-icon.svg";
import reactIcon from "../assets/images/react-icon.svg";
import postgresqlIcon from "../assets/images/postgresql-icon.svg";
import nodejsIcon from "../assets/images/nodejs-icon.svg";
import gitIcon from "../assets/images/git-icon.svg";
import htmlIcon from "../assets/images/html-icon.svg";
import cssIcon from "../assets/images/css-icon.svg";

export default function HomePage() {
  return (
    <main>
      <section id="introduction">
        <article id="greeting">
          <span>
            {"<"}
            <b>h1</b>
            {">"}
          </span>

          <h1>Hey there! My name is</h1>

          <span>
            {"</"}
            <b>h1</b>
            {">"}
          </span>
        </article>

        <h2>Leonardo Lodi.</h2>

        <h3>Full-Stack Web Developer.</h3>

        <article id="summary">
          <span>
            {"<"}
            <b>p</b>
            {">"}
          </span>

          <p>
            As a coder, I take great pleasure in providing the greatest user
            experience and resolving actual issues.
          </p>

          <span>
            {"</"}
            <b>p</b>
            {">"}
          </span>
        </article>
      </section>

      <section id="about">
        <h1>About</h1>

        <article>
          <p>
            <b>H</b>ello, my name is Leonardo and I love chess and games, so I
            spend a lot of my time on the internet. Some of my developer friends
            always recommended that I study programming, they thought it was
            something I would master. I started creating some websites and
            whenever I needed help, I called one of them. I found all those tiny
            letters that generated something so complex magical and
            incomprehensible.
          </p>

          <p>
            <b>I</b> am the type of person who, when discovering something new
            that attracts you, passes the whole day commenting on it and
            studying it. So, after so much desire, I managed to enter this
            environment that always made me want to. I had dozens of
            difficulties, but I realized that it was only through them that I
            was able to learn more and improve.
          </p>

          <p>
            <b>W</b>orked with some developers through the intensive bootcamp I
            graduated from: Boolean; Those were great experiences that showed me
            the difference between working alone and with a team, we don't
            always have to do everything on our own. I am full of desire to grow
            more and today I am looking for a place where I can add value,
            achieve goals and learn.
          </p>
        </article>

        <figure>
          <span>
            {"<"}
            <b>img</b>
            {">"}
          </span>

          <img src={icon} alt="Profile icon" />

          <span>
            {"</"}
            <b>img</b>
            {">"}
          </span>
        </figure>
      </section>

      <section id="skills">
        <h1>Skills</h1>

        <figure>
          <picture>
            <img src={javascriptIcon} alt="Javascript icon" />

            <h2>JavaScript</h2>

            <p>
              My main programming language, which I use for basically everything
              involving application logic and functionalities.
            </p>
          </picture>

          <picture>
            <img src={reactIcon} alt="React icon" />

            <h2>React</h2>

            <p>
              My main library for using JavaScript and HTML together. In
              addition to dozens of other important functions.
            </p>
          </picture>

          <picture>
            <img src={postgresqlIcon} alt="PostgreSQL icon" />

            <h2>PostgreSQL</h2>

            <p>
              I work with SQL to manage the entire database system, my other
              most important programming language.
            </p>
          </picture>

          <picture>
            <img src={nodejsIcon} alt="Node.js icon" />

            <h2>Node.js</h2>

            <p>
              It allows me to run all my codes within JavaScript. I use it for
              both interface and server side.
            </p>
          </picture>

          <picture>
            <img src={gitIcon} alt="Git icon" />

            <h2>Git</h2>

            <p>
              System that I use to manage all my repositories, interact with
              GitHub and my code.
            </p>
          </picture>

          <picture>
            <svg
              className="tech-icons"
              fill="currentColor"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
            </svg>

            <h2>Express.js</h2>

            <p>
              I use this Framework to create the API that will interact between
              the client and the database.
            </p>
          </picture>

          <picture>
            <svg
              className="tech-icons"
              fill="currentColor"
              viewBox="0.34 -0.059977834648891726 33.11668247084116 39.96397783464889"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
            >
              <path
                d="M32.908 30.475L19.151 1.26a2.208 2.208 0 0 0-1.88-1.257 2.183 2.183 0 0 0-2.01 1.042L.34 25.212a2.26 2.26 0 0 0 .025 2.426L7.66 38.935a2.346 2.346 0 0 0 2.635.969l21.17-6.262a2.32 2.32 0 0 0 1.457-1.258 2.27 2.27 0 0 0-.013-1.91zm-3.08 1.253L11.864 37.04c-.548.163-1.074-.312-.96-.865l6.418-30.731c.12-.575.914-.666 1.165-.134l11.881 25.23a.858.858 0 0 1-.541 1.188z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>

            <h2>Prisma</h2>

            <p>
              I use this object-relational mapping from Node.js based on
              PostgreSQL to create the database system.
            </p>
          </picture>

          <picture>
            <img src={htmlIcon} alt="HTML icon" />

            <h2>HTML</h2>

            <p>
              I use it with React when putting together the structure of the web
              application.
            </p>
          </picture>

          <picture>
            <img src={cssIcon} alt="CSS icon" />

            <h2>CSS</h2>

            <p>
              I use it to style all my web applications that I work in React.
            </p>
          </picture>
        </figure>
      </section>

      <section id="work">
        <h1>Work</h1>
      </section>

      <section id="contact">
        <h1>Contact</h1>

        <article>
          <span>
            {"<"}
            <b>p</b>
            {">"}
          </span>

          <p>
            Feel free to message me if you're looking for a developer or just
            want to connect! :)
          </p>

          <span>
            {"</"}
            <b>p</b>
            {">"}
          </span>
        </article>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            cols={50}
            required
          ></textarea>

          <button type="submit">Say Hello</button>
        </form>
      </section>
    </main>
  );
}
