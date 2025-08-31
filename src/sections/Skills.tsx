import Section from '../components/Section'

const skills = {
  Languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Node.js'],
  Frameworks: ['React', 'Vite', 'Express'],
  Tools: ['Git', 'Vitest', 'Playwright', 'ESLint', 'Prettier'],
  Cloud: ['Vercel', 'Netlify', 'Firebase']
}

const Skills: React.FC = () => (
  <Section id="skills" headline="Skills">
    <div className="skills">
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} className="skills__group">
          <h3>{group}</h3>
          <ul className="chips">
            {items.map(s => <li key={s} className="chip">{s}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </Section>
)

export default Skills
