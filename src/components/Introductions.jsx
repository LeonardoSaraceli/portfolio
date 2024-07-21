import "../assets/styles/Introduction.css";

export default function Introduction() {
  return (
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
  );
}
