import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Home from "./Pages/Home";
import Code from "./tools/Code";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code" element={<Code />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
