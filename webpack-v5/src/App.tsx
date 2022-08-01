import React from "react";
import './App.scss';
import Timesheet from "./components/Timesheet";

const App = () => {

  const today = new Date().toLocaleDateString();

  return (
    <div className="app">
      <h1>React and TypeScript Webpack 5 POC!</h1>
      <p className="date">Today is {today}</p>
      
      <Timesheet />
    </div>
  );
  };

export default App;
