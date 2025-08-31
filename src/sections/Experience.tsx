import Section from '../components/Section'
import Card from '../components/Card'
import { experience } from '../data/experience'

const Experience: React.FC = () => (
  <Section id="experience" headline="Experience" description="Places I’ve worked and what I did.">
    <div className="timeline">
      {experience.map(role => (
        <Card
          key={`${role.company}-${role.title}`}
          title={`${role.title} · ${role.company}`}
          subtitle={`${role.start} — ${role.end ?? 'Present'}`}
          href={role.link}
        >
          <ul className="list">
            {role.points.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
)

export default Experience
