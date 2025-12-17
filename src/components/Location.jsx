import { useEffect, useRef, useState } from 'react'

function Location() {
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

  const hours = [
    { day: 'Monday', time: '10:00 AM - 7:00 PM' },
    { day: 'Tuesday', time: '10:00 AM - 7:00 PM' },
    { day: 'Wednesday', time: '10:00 AM - 7:00 PM' },
    { day: 'Thursday', time: '10:00 AM - 7:00 PM' },
    { day: 'Friday', time: '10:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 7:00 PM' },
    { day: 'Sunday', time: '11:00 AM - 6:00 PM' },
  ]

  const today = new Date().getDay()
  const dayIndex = today === 0 ? 6 : today - 1

  return (
    <section id="location" className="location" ref={sectionRef}>
      <div className="location-bg"></div>
      
      <div className="container">
        <div className={`location-header ${isVisible ? 'visible' : ''}`}>
          <span className="location-label">Find Us</span>
          <h2 className="section-title">Visit Our Store</h2>
          <p className="section-subtitle">來店參觀</p>
        </div>

        <div className={`location-content ${isVisible ? 'visible' : ''}`}>
          <div className="location-info">
            <div className="info-card address-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="card-content">
                <h3>Address</h3>
                <p>17 Merkland Road East</p>
                <p>Aberdeen AB24 5DT</p>
                <p>Scotland, UK</p>
                <a 
                  href="https://www.google.com/maps/dir//Many+Mart,+17+Merkland+Rd+E,+Aberdeen+AB24+5DT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="directions-link"
                >
                  Get Directions
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="info-card phone-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="card-content">
                <h3>Phone</h3>
                <a href="tel:01224062058" className="phone-number">01224 062058</a>
                <p className="phone-note">Call us for product inquiries</p>
              </div>
            </div>

            <div className="info-card hours-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div className="card-content">
                <h3>Opening Hours</h3>
                <div className="hours-list">
                  {hours.map((item, index) => (
                    <div 
                      key={item.day} 
                      className={`hour-row ${index === dayIndex ? 'today' : ''}`}
                    >
                      <span className="day">{item.day}</span>
                      <span className="time">{item.time}</span>
                      {index === dayIndex && <span className="today-badge">Today</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="info-card delivery-card">
              <div className="card-icon">🛵</div>
              <div className="card-content">
                <h3>Order Online</h3>
                <p>Get your favorites delivered!</p>
                <div className="delivery-links">
                  <a href="https://deliveroo.co.uk/menu/aberdeen/old-aberdeen/many-mart-asian-supermarket" target="_blank" rel="noopener noreferrer" className="delivery-badge deliveroo">
                    Deliveroo
                  </a>
                  <a href="https://www.just-eat.co.uk/restaurants-many-mart-aberdeen" target="_blank" rel="noopener noreferrer" className="delivery-badge justeat">
                    Just Eat
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="location-map">
            <div className="map-container">
              <iframe
                title="Many Mart Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.1!2d-2.1!3d57.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDEwJzEyLjAiTiAywrAwNicwMC4wIlc!5e0!3m2!1sen!2suk!4v1!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-overlay">
                <a 
                  href="https://www.google.com/maps/place/Many+Mart/@57.1699,-2.0984,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  <img src="/manymart.png" alt="Many Mart" className="map-logo" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`social-links ${isVisible ? 'visible' : ''}`}>
          <span>Follow us on social media</span>
          <div className="social-icons">
            <a href="https://www.instagram.com/manymart_aberdeen/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/manymartaberdeen/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location

