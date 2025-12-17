import { useEffect, useState } from 'react'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grain"></div>
        <div className="hero-glow"></div>
      </div>
      
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-main">
          <div className="hero-logo-mark">
            <img src="/manymart.png" alt="Many Mart" />
          </div>
          
          <h1 className="hero-title">
            <span className="title-top">Aberdeen's</span>
            <span className="title-accent">Asian</span>
            <span className="title-bottom">Supermarket</span>
          </h1>

          <p className="hero-tagline">
            <span className="tagline-chinese">萬利超市</span>
            <span className="tagline-divider">—</span>
            <span className="tagline-english">Ten thousand profits, one destination</span>
          </p>
        </div>

        <div className="hero-info">
          <div className="info-block location-block">
            <span className="info-label">Find us at</span>
            <span className="info-value">17 Merkland Road East</span>
          </div>
          
          <div className="info-block hours-block">
            <span className="info-label">Open today</span>
            <span className="info-value">10am — 7pm</span>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#products" className="cta-main">
            See what's in store
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
          <a href="tel:01224062058" className="cta-phone">
            01224 062058
          </a>
        </div>
      </div>

      <div className="hero-marquee">
        <div className="marquee-track">
          <span>Noodles</span>
          <span className="dot">●</span>
          <span>Dumplings</span>
          <span className="dot">●</span>
          <span>Rice</span>
          <span className="dot">●</span>
          <span>Snacks</span>
          <span className="dot">●</span>
          <span>Sauces</span>
          <span className="dot">●</span>
          <span>Tea</span>
          <span className="dot">●</span>
          <span>Frozen</span>
          <span className="dot">●</span>
          <span>Fresh Veg</span>
          <span className="dot">●</span>
          <span>Noodles</span>
          <span className="dot">●</span>
          <span>Dumplings</span>
          <span className="dot">●</span>
          <span>Rice</span>
          <span className="dot">●</span>
          <span>Snacks</span>
          <span className="dot">●</span>
          <span>Sauces</span>
          <span className="dot">●</span>
          <span>Tea</span>
          <span className="dot">●</span>
          <span>Frozen</span>
          <span className="dot">●</span>
          <span>Fresh Veg</span>
          <span className="dot">●</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
