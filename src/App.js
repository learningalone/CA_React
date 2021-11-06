import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from './components/TopBar'
import './App.css';


function App() {
  return (
    <>
      <Router>
        <TopBar/>
      </Router>
    </>
  );
}

export default App;
