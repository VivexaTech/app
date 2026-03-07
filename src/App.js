import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Home from "./Pages/Home";
import Tools from "./Pages/Tools";
import Course from "./Pages/Course";
import Profile from "./Pages/Profile";
import Code from "./tools/Code";
import ColPic from "./tools/ColPic";
import ImgCom from "./tools/ImgCom";
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/course" element={<Course />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/code" element={<Code />} />
          <Route path="/code" element={<Code />} />
          <Route path="/color-picker" element={<ColPic />} />
          <Route path="/image-compresser" element={<ImgCom />} />
        </Routes> */}
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route path="/tools" element={<Tools />} />
          <Route path="/code" element={<Code />} />
          <Route path="/color-picker" element={<ColPic />} />
          <Route path="/image-compresser" element={<ImgCom />} />

          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />

          <Route path="/course" element={
            <ProtectedRoute>
              <Course />
            </ProtectedRoute>
          } />

          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
