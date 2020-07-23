import React from 'react';
import './App.css';
import Nav from "./Nav";
import './Welcome.css';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
      <div>
          <Nav />
            <div className = "container">
                <h1>Welcome to M2M</h1>
                <h3>Click on a tile to explore more</h3>
            </div>
            <div className = "contain">
                <Link className = "items" id = "D" to = "/team" >Developer</Link>
                <Link className = "items" id = "M" to = "/teams">marketing</Link>
                <Link className = "items" id = "A" to = "/ateams">admin</Link>
                <Link className = "items" id = "Ad"to = "/add">add</Link>
            </div>
      </div>
   
  );
}

export default Welcome;
