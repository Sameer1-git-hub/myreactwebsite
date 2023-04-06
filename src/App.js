import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Header from "./Header";
import Service from "./Service";
import Error from "./Error";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';



const App = () => {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/service" Component={Service} />
        <Route exact path="/contact" Component={Contact} />
        <Route path="*" Component={Error} />

      </Routes>

    </>
  );
}

export default App;
