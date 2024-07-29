import react from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Counter from './Counter';
import './App.css';
import Home from './components/Home';


function App() {
  
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/About' element={<About />}/>
          <Route path='/Contact' element={<Contact />}/>

        </Routes>
      </div>
    </Router>


  
    </>

  )
}

export default App;
