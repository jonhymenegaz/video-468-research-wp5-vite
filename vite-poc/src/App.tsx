import React from "react";
import './App.scss';
import Timesheet from "./components/Timesheet";
import Beach from './images/beach.jpg';

const App = () => {

  const today = new Date().toLocaleDateString();

  return (
    <div className="app">
      <h1>Projects Timesheet <small>Webpack V5 POC App</small></h1>
      <p className="date">Today is {today}</p>
      
      <div className="container">
        <Timesheet />
        <div className="image">
          <img src={Beach} alt="Beach" />
        </div>
      </div>
    </div>
  );
  };

export default App;
