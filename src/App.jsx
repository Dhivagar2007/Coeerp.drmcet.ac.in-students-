import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  return (
    <>
      {currentPage === 'login' && <LoginPage onLoginSuccess={handleLoginSuccess} />}
      {currentPage === 'dashboard' && <Dashboard user={user} onLogout={handleLogout} />}
    </>
  );
}

export default App;
