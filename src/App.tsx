import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import { ProfileContextProvider } from "./context/useProfileContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <ProfileContextProvider>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ProfileContextProvider>
  );
};

export default App;
