import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { ProfileContextProvider } from "./context/useProfileContext";

import Plan from "./pages/Plan";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <ProfileContextProvider>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ProfileContextProvider>
  );
};

export default App;
