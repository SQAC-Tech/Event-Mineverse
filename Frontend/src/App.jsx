import React from 'react'
import HeroVH from './Pages/Hero.jsx'
import background1 from './assets/background.jpg'
import background2 from './assets/background_dirt.jpg'
import RulesVH from './Pages/Rules.jsx'
import background from './assets/de-blurimage.jpg'
import Footer from './Pages/footer.jsx'
import TimelineReveal from './Pages/Timeline.jsx'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className="relative w-full min-h-screen text-white font-mono overflow-x-hidden overflow-y-hidden  ">
      {/* Background Image */}
      <img
  src={background}
  alt="Background"
  className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
  style={{
    objectPosition: 'top',
  }}
/>


      {/* Page Content */}
      <HeroVH />
       <TimelineReveal />
      <RulesVH />
      <Footer />
      <Analytics/>
    </div>
  )
}

export default App
