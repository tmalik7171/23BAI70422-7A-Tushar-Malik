<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
=======
import { useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <h1>Single Page Web (React)</h1>
      <Navbar setPage={setPage} />
      <Content page={page} />
    </div>
  );
}

export default App;
>>>>>>> 55d21f7f94ac0ef029e1771322d12ee9cf449d59
