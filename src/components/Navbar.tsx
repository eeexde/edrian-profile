import { useEffect, useState } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <div className="brand" onClick={() => go('home')} role="button" tabIndex={0}>
          <span className="brand__dot" /> Edrian
        </div>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(l => (
            <button key={l.id} className="nav__link" onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <button className="nav__menu" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          ☰
        </button>
      </div>
    </header>
  )
}

export default Navbar
