function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/manymart.png" alt="Many Mart" className="footer-logo" />
            <div className="footer-brand-text">
              <span className="brand-english">MANY MART</span>
              <span className="brand-chinese">萬利超市</span>
            </div>
            <p className="footer-tagline">
              Your gateway to authentic Asian flavors in Aberdeen
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#products">Products</a>
              <a href="#reviews">Reviews</a>
            </div>
            
            <div className="link-group">
              <h4>Contact</h4>
              <a href="tel:01224062058">01224 062058</a>
              <a href="#location">17 Merkland Rd E</a>
              <a href="#location">Aberdeen AB24 5DT</a>
            </div>

            <div className="link-group">
              <h4>Order Online</h4>
              <a href="https://deliveroo.co.uk/menu/aberdeen/old-aberdeen/many-mart-asian-supermarket" target="_blank" rel="noopener noreferrer">Deliveroo</a>
              <a href="https://www.just-eat.co.uk/restaurants-many-mart-aberdeen" target="_blank" rel="noopener noreferrer">Just Eat</a>
              <a href="https://hungrypanda.co" target="_blank" rel="noopener noreferrer">Hungry Panda</a>
            </div>

            <div className="link-group">
              <h4>Follow Us</h4>
              <div className="footer-social">
                <a href="https://www.instagram.com/manymart_aberdeen/" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a href="https://www.facebook.com/manymartaberdeen/" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Many Mart Aberdeen 萬利超市. All rights reserved.</p>
          <p className="footer-love">Made with ❤️ for the Aberdeen Asian community</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

