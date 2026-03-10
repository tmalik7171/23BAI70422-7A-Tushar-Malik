<<<<<<< HEAD
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Analytics from "./Pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 1d939af2fee95855e5131eace9b52aafbe502235
  );
}

export default App;