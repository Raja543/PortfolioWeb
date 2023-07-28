import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
