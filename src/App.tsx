import React, { useState ,Suspense } from 'react'
import Footer from '@/components/Footer'
import RoutesConfig from '@/routes'
function App() {

  return (
    <div className="App">
      <Suspense fallback={<div><img src="https://wimg.588ku.com/gif620/21/02/06/8be1b6a5b119d6f6011de23747842012.gif" style={{width:'200px' ,position:'fixed',top:'50%',left:'50%',transform:"translate(-50%, -50%)"}} alt="" /></div>}><RoutesConfig/></Suspense>
      <Footer/>
    </div>
  )
}

export default App
