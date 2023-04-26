import "./styles/reset.css";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  // const [theme, setTheme] = useState();
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/*" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
