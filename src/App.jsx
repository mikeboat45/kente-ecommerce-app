import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* 
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={} /> 
        */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
