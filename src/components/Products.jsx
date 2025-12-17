import { useEffect, useRef, useState } from 'react'

function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛒' },
    { id: 'snacks', name: 'Snacks', icon: '🍿' },
    { id: 'noodles', name: 'Noodles', icon: '🍜' },
    { id: 'drinks', name: 'Beverages', icon: '🧋' },
    { id: 'frozen', name: 'Frozen', icon: '❄️' },
    { id: 'sauces', name: 'Sauces', icon: '🫙' },
  ]

  const products = [
    { name: 'Instant Noodles', category: 'noodles', emoji: '🍜', origin: 'Various', desc: 'Wide variety from Korea, Japan & China' },
    { name: 'Rice Cakes', category: 'snacks', emoji: '🍘', origin: 'Korea', desc: 'Fresh tteok for hotpot & cooking' },
    { name: 'Bubble Tea', category: 'drinks', emoji: '🧋', origin: 'Taiwan', desc: 'DIY kits & ready-to-drink options' },
    { name: 'Frozen Dumplings', category: 'frozen', emoji: '🥟', origin: 'China', desc: 'Handmade style gyoza & jiaozi' },
    { name: 'Soy Sauce', category: 'sauces', emoji: '🫙', origin: 'Japan', desc: 'Premium Kikkoman & Lee Kum Kee' },
    { name: 'Pocky Sticks', category: 'snacks', emoji: '🍫', origin: 'Japan', desc: 'Multiple flavors available' },
    { name: 'Jasmine Rice', category: 'all', emoji: '🍚', origin: 'Thailand', desc: 'Fragrant long grain rice' },
    { name: 'Kimchi', category: 'frozen', emoji: '🥬', origin: 'Korea', desc: 'Authentic fermented vegetables' },
    { name: 'Matcha', category: 'drinks', emoji: '🍵', origin: 'Japan', desc: 'Ceremonial & cooking grade' },
    { name: 'Sriracha', category: 'sauces', emoji: '🌶️', origin: 'Thailand', desc: 'The famous rooster sauce' },
    { name: 'Mochi', category: 'snacks', emoji: '🍡', origin: 'Japan', desc: 'Ice cream & traditional styles' },
    { name: 'Rice Paper', category: 'all', emoji: '📃', origin: 'Vietnam', desc: 'For fresh spring rolls' },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="products" ref={sectionRef}>
      <div className="products-bg"></div>
      
      <div className="container">
        <div className={`products-header ${isVisible ? 'visible' : ''}`}>
          <span className="products-label">What We Offer</span>
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">精選商品</p>
          <p className="products-intro">
            From everyday essentials to hard-to-find specialties, we stock everything 
            you need to create authentic Asian dishes at home.
          </p>
        </div>

        <div className={`category-tabs ${isVisible ? 'visible' : ''}`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span className="tab-name">{cat.name}</span>
            </button>
          ))}
        </div>

        <div className={`products-grid ${isVisible ? 'visible' : ''}`}>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.name}
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-emoji">{product.emoji}</div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-origin">{product.origin}</span>
                <p className="product-desc">{product.desc}</p>
              </div>
              <div className="product-tag">{product.category}</div>
            </div>
          ))}
        </div>

        <div className={`products-cta ${isVisible ? 'visible' : ''}`}>
          <p>Can't find what you're looking for?</p>
          <a href="tel:01224062058" className="btn btn-outline">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call Us - We Can Order It!
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products

