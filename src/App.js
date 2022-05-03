import React from 'react';
import './App.css';
import DriverHeader from './DriverNewsFeed/DriverHeader';
import RoutesController from './RoutesController';
import { useLocation } from 'react-router-dom';
// import { useStateValue } from './StateProvider';

function App() {

  const noDriverHeaderArray = ['/login', '/homepage', '/request', '/contact', '/userrequest'];
  const { pathname } = useLocation();
  // const [{ user }, dispatch] = useStateValue();

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

