import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Detail from "./view/Detail/Detail";
import Footer from "./view/Footer/Footer";
import LandingPage from "./view/LandingPage/LandingPage";
import NavBar from "./view/NavBar/NavBar";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/user/:userName" element={<Detail />} />
          </Routes >
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
