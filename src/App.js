// import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Faq from "./pages/Faq/Faq";


function App() {
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
    
    <Footer />
    </>
  );
}

export default App;
