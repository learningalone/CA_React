import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Login from "./components/Login";
import NewPerson from "./components/NewPerson";
import EditPerson from "./components/EditPerson";
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
          <Route exact path="/person/add" element={<NewPerson user={user} />}/>
          <Route exact path="/person/edit/:id" element={<EditPerson user={user} />}/>
          <Route exact path="/people/get" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
