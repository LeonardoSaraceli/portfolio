/* eslint-disable react/no-unescaped-entities */
import icon from "../assets/images/icon.jpg";
import javascriptIcon from "../assets/images/javascript-icon.svg";
import reactIcon from "../assets/images/react-icon.svg";
import postgresqlIcon from "../assets/images/postgresql-icon.svg";
import nodejsIcon from "../assets/images/nodejs-icon.svg";
import gitIcon from "../assets/images/git-icon.svg";
import expressjsIcon from "../assets/images/expressjs-icon.svg";
import prismaIcon from "../assets/images/prisma-icon.svg";
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
            that attracts you, spends the whole day commenting on it and
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
            {"</"}
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
            <img src={expressjsIcon} alt="Express.js icon" />

            <h2>Express.js</h2>

            <p>
              Framework necessary to create the API that will interact between
              the client and the database.
            </p>
          </picture>

          <picture>
            <img src={prismaIcon} alt="Prisma icon" />

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
              Basic markup language that I use in React for the entire structure
              of an web app.
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
      </section>
    </main>
  );
}
