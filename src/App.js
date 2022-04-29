import React from 'react';
import './App.css';
import DriverHeader from './DriverHeader';
import RoutesController from './RoutesController';
import { useLocation } from 'react-router-dom';

function App() {
  const noDriverHeaderArray = ['/login', '/homepage', '/request'];
  const { pathname } = useLocation();

  return (
    <div className="app">
      {noDriverHeaderArray.includes(pathname) ? null : <DriverHeader />}

      <div className="app_body">
        <RoutesController />
      </div>
    </div>
  );
}

export default App;

