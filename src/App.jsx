import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
