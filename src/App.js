import React from "react";
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Layout from "./layout/Layout";

function App() {
  return (
    <HashRouter hashType="slash">

      <Routes>
        <Route exact path="/about" element={<Layout val={< About />}/>} />
        <Route exact path="/technologies" element={<Layout val={< Technologies />}/>} />
        <Route exact path='/projects' element={<Layout val={< Projects />}/>} />
        <Route exact path='/' element={<Layout val={< About />}/>} />
      </Routes>

    </HashRouter>
  );
}

export default App;
