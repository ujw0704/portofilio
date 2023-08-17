// import Head from './Comopents/Head';
import Side from './Comopents/Side';
// import Body from './Comopents/Body';
import About from './Comopents/About';
import Portfilio from './Comopents/Portfilio';
import Qulifaction from './Comopents/Qulifaction';
import Home from './Comopents/Home';
import Skill from './Comopents/Skill';
import Contact from './Comopents/Contact'; import Work from './Comopents/Work'; import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <Side/>

        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          {/* <Route path="/Head" element={<Head />}></Route> */}
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/body" element={<Body />}></Route> */}
          <Route path="/skill" element={<Skill />}></Route>
           <Route path="/work" element={<Work />}></Route> 
          <Route path="/portifoli" element={<Portfilio />}></Route>
          <Route path="/qulifation" element={<Qulifaction />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          



        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
