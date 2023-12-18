import Layout from "./Component/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Menu from "./Page/Menu";
import Notpage from "./Page/Notpage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Notpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
