import React from "react";
import './App.scss';
import Timesheet from "./components/Timesheet";

const App = () => {

  const today = new Date("2022-08-01").toLocaleDateString();

  return (
    <div className="app">
      <h1>Projects Timesheet <small>Webpack V5 POC App</small></h1>
      <p className="date">Today is {today}</p>
      
      <Timesheet />
    </div>
  );
  };

export default App;
