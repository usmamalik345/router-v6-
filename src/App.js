import {BrowserRouter , Routes, Route} from "react-router-dom"

import './App.css';
import About from "./Components/pages/About";
import { Contact } from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import Navbar from "./Components/pages/Navbar";
import Post from "./Components/pages/Post";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
      <Routes>
          {/* <Route path="/" element={ <h1> Heelo Bawa g </h1> } /> */}
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/post/:category" element={ <Post />} />
          <Route path="*" element={ <h1> 404 Error </h1>} />

      </Routes>
    </BrowserRouter>

      <h1> Hello </h1>
    </>
  );
}

export default App;
