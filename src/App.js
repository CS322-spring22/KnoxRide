import React from 'react';
import './App.css';
import Header from "./Header";
import RoutesController from './RoutesController';
//import HomePage from "./HomePage";

function App() {
  return (
    <div className="app">
       <div className="app_body">
         <RoutesController />
       </div>

    </div>
  );
}

export default App;
