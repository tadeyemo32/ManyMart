import { useEffect, useRef, useState } from 'react'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '2+', label: 'Years Serving Aberdeen', icon: '📅' },
    { number: '1000+', label: 'Products Available', icon: '📦' },
    { number: '4.8', label: 'Google Rating', icon: '⭐' },
    { number: '2.6k+', label: 'Happy Customers', icon: '❤️' },
  ]

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-bg-pattern"></div>
      
      <div className="container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <span className="about-label">Our Story</span>
            <h2 className="section-title">A Taste of Asia<br />in Aberdeen</h2>
            <p className="section-subtitle">來自亞洲的美味</p>
            
            <div className="about-description">
              <p>
                Many Mart Aberdeen is more than just a supermarket – it's a gateway to 
                authentic Asian cuisine. We carefully curate our collection of premium 
                products from across Asia, bringing you the finest ingredients, snacks, 
                and specialty items that remind you of home.
              </p>
              <p>
                From fresh vegetables and frozen goods to your favorite childhood snacks, 
                we stock everything you need to create authentic Asian dishes. Our friendly 
                staff is always ready to help you find exactly what you're looking for.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-icon">🇨🇳</div>
                <span>Chinese</span>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🇯🇵</div>
                <span>Japanese</span>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🇰🇷</div>
                <span>Korean</span>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🇹🇭</div>
                <span>Thai</span>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🇻🇳</div>
                <span>Vietnamese</span>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-grid">
              <div className="grid-item item-1">
                <div className="item-content">
                  <span className="item-emoji">🏪</span>
                  <span className="item-label">Your Local Asian Store</span>
                </div>
              </div>
              <div className="grid-item item-2">
                <div className="item-content">
                  <span className="item-emoji">🥢</span>
                  <span className="item-label">Authentic Products</span>
                </div>
              </div>
              <div className="grid-item item-3">
                <div className="item-content">
                  <span className="item-emoji">👨‍👩‍👧‍👦</span>
                  <span className="item-label">Family Owned</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`stats-grid ${isVisible ? 'visible' : ''}`}>
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="stat-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

