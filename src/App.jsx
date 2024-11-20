import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Login from './pages/Login';
import Task from './pages/Task';
import UpdateProfile from './pages/UpdateProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {}
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;