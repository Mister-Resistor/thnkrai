import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { Route, Routes } from 'react-router-dom';
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Background/>
      <div>
        <Routes>
          <Route path="/thnkrai" element={<Home/>}/>
          <Route path="/thnkrai/about" element={<About/>}/>
          <Route path="/thnkrai/product" element={<Product/>}/>
          <Route path="/thnkrai/pricing" element={<Pricing/>}/>
          <Route path="/thnkrai/contact" element={<Contact/>}/>
          <Route path="/thnkrai/docs" element={<Docs/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
