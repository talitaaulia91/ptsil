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
        <Route path="/l_home" element={<Dashboard/>}/>
        <Route path="/l_user" element={<Table/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

