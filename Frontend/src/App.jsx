import React from 'react'
import HeroVH from './Pages/Hero.jsx'
import background1 from './assets/background.jpg'
import background2 from './assets/background_dirt.jpg'
import RulesVH from './Pages/Rules.jsx'
import background from './assets/java edition.jpg'
import Footer from './Pages/footer.jsx'
import TimelineReveal from './Pages/Timeline.jsx'

const App = () => {
  return (
    <div className="relative w-full min-h-screen text-white font-mono overflow-x-hidden overflow-y-hidden  ">
      {/* Background Image */}
      <img
        src={background}
        alt="Background"
        className="absolute top-0 left-0 w-full h-auto min-h-full -z-10 "
        style={{
          objectFit: 'contain',   
          objectPosition: 'top',  
        }}
      />

      {/* Page Content */}
      <HeroVH />
       <TimelineReveal />
      <RulesVH />
      <Footer />
    </div>
  )
}

export default App
