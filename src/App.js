import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Layout from "./layout/Layout";

function App() {
  return (
    <HashRouter>
    <Routes>

      <Route path='/about' element={<Layout val={< About />}/>} />
      <Route path='/technologies' element={<Layout val={< Technologies />}/>} />
      <Route path='/projects' element={<Layout val={< Projects />}/>} />

    </Routes>
    </HashRouter>
  );
}

export default App;
