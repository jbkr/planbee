import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Detail from "./view/Detail/Detail";
import Footer from "./view/Footer/Footer";
import LandingPage from "./view/LandingPage/LandingPage";
import NavBar from "./view/NavBar/NavBar";
import Register from "./view/Register/Register";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div style={{ minHeight: 'calc(100vh - 80px)' }}>
          {/* <Router> */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/user/:userName" element={<Detail />} />
              <Route path="/register" element={<Register />} />
            </Routes >
          {/* </Router> */}
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
