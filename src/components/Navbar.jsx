import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#location' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <img src="/manymart.png" alt="Many Mart Logo" className="logo-img" />
          <span className="logo-text">
            <span className="logo-english">MANY MART</span>
            <span className="logo-chinese">萬利超市</span>
          </span>
        </a>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={link.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <a 
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="nav-cta" style={{ animationDelay: '0.5s' }}>
            <a href="tel:01224062058" className="btn-call">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

