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
        <h1 className="font-bold text-2xl">Hello Vite + React!</h1>
      </Router>
    </>
  );
}

export default App;
