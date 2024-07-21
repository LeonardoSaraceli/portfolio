/* eslint-disable react/no-unescaped-entities */
import icon from "../assets/images/icon.jpg";
import "../assets/styles/About.css";

export default function About() {
  return (
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
          that attracts you, passes the whole day commenting on it and studying
          it. So, after so much desire, I managed to enter this environment that
          always made me want to. I had dozens of difficulties, but I realized
          that it was only through them that I was able to learn more and
          improve.
        </p>

        <p>
          <b>W</b>orked with some developers through the intensive bootcamp I
          graduated from: Boolean; Those were great experiences that showed me
          the difference between working alone and with a team, we don't always
          have to do everything on our own. I am full of desire to grow more and
          today I am looking for a place where I can add value, achieve goals
          and learn.
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
  );
}
