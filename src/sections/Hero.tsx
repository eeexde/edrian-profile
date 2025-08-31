const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div>
          <p className="muted">Hi, I’m</p>
          <h1>Edrian Pasaylo</h1>
          <p className="lead">
            I build fast, accessible web apps with <strong>React</strong>, <strong>TypeScript</strong>, and solid UX.
          </p>
          <div className="hero__ctas">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn btn--ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
        <div className="hero__avatar" aria-hidden="true">👩‍💻</div>
      </div>
    </section>
  )
}

export default Hero
