import { PropsWithChildren } from 'react'

type CardProps = PropsWithChildren<{
  title?: string
  subtitle?: string
  href?: string
}>

const Card: React.FC<CardProps> = ({ title, subtitle, href, children }) => {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag className="card" {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}>
      {title && <h3 className="card__title">{title}</h3>}
      {subtitle && <p className="card__subtitle">{subtitle}</p>}
      <div className="card__body">{children}</div>
    </Tag>
  )
}

export default Card
