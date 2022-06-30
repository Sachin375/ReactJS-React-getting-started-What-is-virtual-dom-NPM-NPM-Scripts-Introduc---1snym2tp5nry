import React, {Component, useState} from "react";
import '../styles/App.css';
import Project from "./Project";

const App = () => {
  return (
    <div id="main">
    <Project data-ns-test="project-name"/>
    <Project data-ns-test="project-description"/>
    </div>
  )
}


export default App;
