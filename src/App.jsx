import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Table from './views/Table';
import React from 'react'

export default function App() {
  return (
    <div className="App">
      <meta name="csrf-token" content="{{ csrf_token() }}" />
      

      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/table" element={<Table/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

