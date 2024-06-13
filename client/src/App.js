import {BrowserRouter,Routes,Route}from "react-router-dom"
import './App.css';
import Home from "./pages/HomePage";
import register from "./pages/HomePage";
import login from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
   <div>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
 </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
