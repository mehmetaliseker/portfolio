import './App.css'
import Navbar from './sections/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <>
      <LanguageProvider>
        <div className='overflow-x-hidden '>
          <Navbar />
          <Home />
          <About />
          <Projects />
        </div>
      </LanguageProvider>
    </>

  )
}

export default App;