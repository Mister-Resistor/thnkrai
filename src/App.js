import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";
import NavBar from "./components/NavBar";

import { Route, Routes } from 'react-router-dom';
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Background/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/docs" element={<Docs/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
