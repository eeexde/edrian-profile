const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div>
          <p className="muted">Hi, I’m</p>
          <h1>Edrian Pasaylo</h1>
          <p className="lead">
              <strong>I’m an Information Technology student and Bubble.io developer</strong> 
  specializing in building user-friendly web applications and smart automations. 
  With experience in tools like <strong>n8n, Power Automate, Make.com, APIs, and webhooks</strong>, 
  I help businesses streamline workflows, save time, and boost efficiency. 
  I enjoy turning complex processes into simple, scalable solutions that empower 
  teams to focus on what matters most.
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
