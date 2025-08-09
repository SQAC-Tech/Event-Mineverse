import React from 'react'
import HeroVH from './Pages/Hero.jsx'
import background1 from './assets/background.jpg'
import background2 from './assets/background_dirt.jpg'
import RulesVH from './Pages/Rules.jsx'


const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background1})` }} className='w-full min-h-screen bg-cover bg-center bg-no-repeat'>
      <HeroVH />
      <RulesVH />
    </div>
  )
} 

export default App;
