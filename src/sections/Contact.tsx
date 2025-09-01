import Section from '../components/Section'

const Contact: React.FC = () => (
  <Section id="contact" headline="Get in touch" description="Have a question or want to work together?">
    <div className="contact">
      <a className="btn" href="mailto:pasaylo.ed03@gmail.com">Email me</a>
      <div className="socials">
        <a href="https://github.com/eeexde" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.onlinejobs.ph/jobseekers/info/4228054" target="_blank" rel="noreferrer">OnlineJobsPh</a>
      </div>
    </div>
  </Section>
)

export default Contact
