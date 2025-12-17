import { useState, useEffect } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App
