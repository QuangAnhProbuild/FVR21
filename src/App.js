import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFire,
  faTruck,
  faBatteryFull
} from '@fortawesome/free-solid-svg-icons'

import './App.css'
import Features from './components/Features/Feature'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Pricing from './components/Pricing/Pricing'

function App() {
  library.add(faFire, faTruck, faBatteryFull)
  return (
    <div id='page-wrapper'>
      <Header />
      <div className='container'></div>
      <Hero />

      <div className='container'>
        <Features />
        <HowItWorks />
        <Pricing />
        <Footer />
      </div>
    </div>
  )
}

export default App
