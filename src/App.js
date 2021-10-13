import "./App.css";
import { Blogs, Footer, Navbar, Profile, Projects } from "./components";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
