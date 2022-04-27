import React from 'react';
import './App.css';
import DriverHeader from './DriverNewsFeed/DriverHeader';
import RoutesController from './RoutesController';
import { useLocation } from 'react-router-dom';

function App() {
  const noDriverHeaderArray = ['/login', '/homepage'];
  const { pathname } = useLocation();
  // const user = "rosie";
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
