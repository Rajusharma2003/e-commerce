import './App.css'
import Footer from './customers/components/Footer/Footer'
import Navigation from './customers/components/Navigation/Navigation'
import HomePage from './customers/pages/HomePage/HomePage'

function App() {

  return (

    // This is for navigation bar.
   <div className="">
      <Navigation/>

    {/* This is for carousle */}
      <div>
       <HomePage/>
       {/* home  */}
    </div>


      <div>
       <Footer/>
    </div>


    </div>
    
  )
}

export default App
