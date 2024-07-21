/* eslint-disable react/no-unescaped-entities */
import "../assets/styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>

      <article>
        <span>
          {"<"}
          <b>p</b>
          {">"}
        </span>

        <p>
          Feel free to message me if you're looking for a developer or just want
          to connect! :)
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
  );
}
