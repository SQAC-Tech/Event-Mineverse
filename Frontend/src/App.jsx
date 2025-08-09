import React from 'react'
import HeroVH from './Pages/Hero.jsx'
import background1 from './assets/background.jpg'
import background2 from './assets/background_dirt.jpg'
import RulesVH from './Pages/Rules.jsx'

import Footer from './Pages/footer.jsx'

const App = () => {
  return (
    <>
      <div>
        <HeroVH />
        <RulesVH />
        <Footer />
      </div>
    </>
  )
} 

export default App;
