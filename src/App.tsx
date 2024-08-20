import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { ProfileContextProvider } from "./context/useProfileContext";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";

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
