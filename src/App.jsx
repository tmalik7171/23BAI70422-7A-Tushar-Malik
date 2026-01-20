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
