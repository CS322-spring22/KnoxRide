import React from 'react';
import './App.css';
import Header from "./Header";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app_body">
        <Feed />
      </div>

    </div>
  );
}

export default App;
