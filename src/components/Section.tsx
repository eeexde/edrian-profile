import { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id: string
  headline: string
  description?: string
}>

const Section: React.FC<SectionProps> = ({ id, headline, description, children }) => (
  <section id={id} className="section">
    <div className="container">
      <header className="section__header">
        <h2>{headline}</h2>
        {description && <p className="muted">{description}</p>}
      </header>
      {children}
    </div>
  </section>
)

export default Section
