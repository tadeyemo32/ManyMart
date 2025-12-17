import { useEffect, useRef, useState } from 'react'

function Reviews() {
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

  const reviews = [
    {
      name: 'Rachel',
      initial: 'R',
      rating: 5,
      text: 'Wonderful staff, wide variety, great deals and good service. My go-to place for Asian groceries in Aberdeen!',
      source: 'Google',
    },
    {
      name: 'Lisa J',
      initial: 'L',
      rating: 5,
      text: 'Great selection of food, reasonably priced & friendly, helpful staff. Always find what I need here.',
      source: 'Google',
    },
    {
      name: 'Justin Green',
      initial: 'J',
      rating: 5,
      text: 'Good range of Korean, Japanese, SEA and some Chinese stuff. The frozen section is particularly impressive.',
      source: 'Google',
    },
    {
      name: 'Sarah M',
      initial: 'S',
      rating: 5,
      text: 'Best Asian supermarket in Aberdeen! The loyalty points system is amazing, and they always have fresh produce.',
      source: 'Facebook',
    },
    {
      name: 'David W',
      initial: 'D',
      rating: 5,
      text: 'Finally found authentic ingredients for my cooking. The staff helped me find everything I needed for hot pot night!',
      source: 'Google',
    },
    {
      name: 'Emma Chen',
      initial: 'E',
      rating: 5,
      text: 'Feels like home! They have snacks I grew up with that I couldn\'t find anywhere else in Scotland.',
      source: 'Google',
    },
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ))
  }

  return (
    <section id="reviews" className="reviews" ref={sectionRef}>
      <div className="reviews-bg"></div>
      
      <div className="container">
        <div className={`reviews-header ${isVisible ? 'visible' : ''}`}>
          <span className="reviews-label">What People Say</span>
          <h2 className="section-title">Customer Reviews</h2>
          <p className="section-subtitle">顧客評價</p>
          
          <div className="reviews-summary">
            <div className="summary-rating">
              <span className="big-rating">4.8</span>
              <div className="rating-stars">{renderStars(5)}</div>
              <span className="rating-count">Based on 160+ reviews</span>
            </div>
            <div className="summary-badges">
              <div className="badge">
                <img src="https://www.google.com/favicon.ico" alt="Google" />
                <span>Google Reviews</span>
              </div>
              <div className="badge">
                <span className="fb-icon">f</span>
                <span>Facebook 5/5</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`reviews-grid ${isVisible ? 'visible' : ''}`}>
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="review-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="review-header">
                <div className="reviewer-avatar">
                  {review.initial}
                </div>
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.name}</span>
                  <div className="review-stars">{renderStars(review.rating)}</div>
                </div>
                <span className="review-source">{review.source}</span>
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div className={`reviews-cta ${isVisible ? 'visible' : ''}`}>
          <p>Love shopping with us?</p>
          <a 
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Leave a Review
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reviews

