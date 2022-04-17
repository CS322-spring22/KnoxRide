import React from 'react';
import './App.css';
import DriverHeader from "./DriverHeader";
import RoutesController from './RoutesController';

function App() {
  // let noDriverHeader = [Applog, HomePage];
  // let noUserHeader = [Applog, Header, HomePage];
  return (
    <div className="app">
      <DriverHeader /> 
       <div className="app_body">
         <RoutesController />
       </div>
    </div>
  );
}

export default App;
