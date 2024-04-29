import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from "./Pages/Landing";

function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="*" element={<div>Not Found 404</div>} />
    </Routes>
    </>
  )
}

export default App
