import './App.css'
import Navbar from './sections/Navbar'
import Main from './sections/Main'
import About from './sections/About'
import Projects from './sections/Projects'

function App() {
  return (
  <>
  <div className='overflow-x-hidden '>
    <Navbar />
    <Main />
    <About />
    <Projects />    
  </div>

  </>

  )
}

export default App;