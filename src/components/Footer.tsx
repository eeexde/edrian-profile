const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <span>© {new Date().getFullYear()} Edrian Pasaylo</span>
      <span className="muted">Built with React + Vite + TS</span>
    </div>
  </footer>
)

export default Footer
