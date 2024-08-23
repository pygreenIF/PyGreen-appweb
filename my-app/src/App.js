import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Modules from './components/pages/Modules'
import Modulo1 from './components/pages/modules-pages/Modulo1'
import Modulo2 from './components/pages/modules-pages/Modulo2'
import Modulo3 from './components/pages/modules-pages/Modulo3'
import Modulo4 from './components/pages/modules-pages/Modulo4'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './components/modules/About'
import Home from './components/modules/Home'


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
            <Route exact path="/" element= {<Home />}/>
            <Route exact path="/modulos" element= {<Modules />}/>
            <Route exact path="/modulos/modulo-1" element= {<Modulo1 />}/>
            <Route exact path="/modulos/modulo-2" element= {<Modulo2 />}/>
            <Route exact path="/modulos/modulo-3" element= {<Modulo3 />}/>
            <Route exact path="/modulos/modulo-4" element= {<Modulo4 />}/>
            <Route exact path="/sobre" element= {<About />}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;