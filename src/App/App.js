import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hamburger from "./Hamburger"
import Home from "../Home/Home"
import Company from "../Company/Company"
import Philosophy from "./Philosophy"
import Projects from './Projects';
import Recognition from './Recognition';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Hamburger />}>
            <Route index element={<Home />} />
            <Route path="company" element={<Company />} />
            <Route path="projects" element={<Projects />} />
            <Route path="philosophy" element={<Philosophy />} />
            <Route path="recognition" element={<Recognition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
