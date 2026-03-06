import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Home from "./Pages/Home";
import Tools from "./Pages/Tools";
import Course from "./Pages/Course";
import Profile from "./Pages/Profile";
import Code from "./tools/Code";
import ColPic from "./tools/ColPic";
import ImgCom from "./tools/ImgCom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/course" element={<Course />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/code" element={<Code />} />
        <Route path="/code" element={<Code />} />
        <Route path="/color-picker" element={<ColPic />} />
        <Route path="/image-compresser" element={<ImgCom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
