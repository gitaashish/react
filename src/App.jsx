import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import ApparelPage from './pages/Apparel';
import './assets/css/style.css';
import NoPageFound from './pages/NoPageFound';
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/apparel" element={<ApparelPage />} />
          </Route>
            <Route path="*" element={<NoPageFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
