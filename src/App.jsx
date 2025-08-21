import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Project1 from './Project1';

function App() {
  return (
    <div>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Home />} />
        {/* 프로젝트 1 */}
        <Route path="/project1" element={<Project1 />} />
      </Routes>
    </div>
  );
}

export default App;
