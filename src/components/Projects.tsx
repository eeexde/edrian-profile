import Section from '../components/Section'
import Card from '../components/Card'
import { projects } from '@data/projects'

const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      headline="Featured Projects"
      description="A few things I’ve shipped recently."
    >
      <div className="grid">
        {projects.map(p => (
          <Card key={p.slug} title={p.name} subtitle={p.stack.join(' · ')} href={p.url}>
            <p>{p.summary}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Projects
