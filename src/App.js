import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/api";
import { Container, Grid, Typography } from "@material-ui/core";
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <MyCard/>
    
    </div>
  );
}

export default App;
