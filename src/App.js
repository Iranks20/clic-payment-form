import React from 'react';
import Payment from './components/payment';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Payment />} />
    </Routes>
  );
}

export default App;
