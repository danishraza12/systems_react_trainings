import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Components/blogs";
import Home from "./Components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/blogs" element={<Blogs />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
