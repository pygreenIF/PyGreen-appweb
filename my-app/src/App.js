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
import Game from './components/layout/Game'
import Auth from './components/modules/Auth'
import Modulo0 from './components/pages/modules-pages/Modulo0'
import UserPage from './components/modules/UserPage'
import Profile from './components/modules/Profile'


function ContainerLayout({children}) {
  return <Container customClass='min-height'>{children}</Container>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/modulos/modulo-0" element={<Modulo0 />} />
        <Route exact path="/modulos/modulo-1" element={<Modulo1 />} />
        <Route exact path="/modulos/modulo-2" element={<Modulo2 />} />
        <Route exact path="/modulos/modulo-3" element={<Modulo3 />} />
        <Route exact path="/modulos/modulo-4" element={<Modulo4 />} />
        <Route path="/user/:nickname" element={<UserPage />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route exact path="/game" element={<Game />} />
        <Route 
          exact 
          path="/modulos" 
          element={
            <ContainerLayout>
              <Modules />
            </ContainerLayout>
          } 
        />
        <Route 
          exact 
          path="/sobre" 
          element={
            <ContainerLayout>
              <About />
            </ContainerLayout>
          } 
        />
        <Route 
          exact 
          path="/auth" 
          element={
            <ContainerLayout>
              <Auth />
            </ContainerLayout>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
