import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Login from "./components/Login";
import "./App.css";

function App() {

  const [ user, setUser ] = useState({
    id: '123456',
    name: 'Alejandro Caicedo',
  });

  return (
    <>
      <Router>
        <TopBar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/" element={<Login user={user} setUser={setUser} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
