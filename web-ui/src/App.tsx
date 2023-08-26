import React from 'react';
import './App.css';
import NavBar from './nav/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import { AppRoute } from './utils/AppRoute';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={`/${AppRoute.Home}`} element={<Home />} />
        <Route path={`/${AppRoute.Resume}`} element={<Resume />} />
        <Route path={`/${AppRoute.Portfolio}`} element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
