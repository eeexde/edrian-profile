import Section from '../components/Section'

const Contact: React.FC = () => (
  <Section id="contact" headline="Get in touch" description="Have a question or want to work together?">
    <div className="contact">
      <a className="btn" href="mailto:you@example.com">Email me</a>
      <div className="socials">
        <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">X / Twitter</a>
      </div>
    </div>
  </Section>
)

export default Contact
