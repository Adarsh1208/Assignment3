import React, { useState, useEffect } from 'react';
import './App.css';
import UserLogin from "./UserLogin";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Welcome from './Welcome';
import Develop from './Develop';
import MemberDetails from './MemberDetails';
import Marketing from './Marketing';
import Admin from './Admin';
import MemberDetailsA from './MemberDetailsA';
import MemberDetailsM from './MemberDetailsM';

function App() {

  const [LoginState, setLoginState] = useState(false);
  const isLoggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    isLoggedIn === true ? setLoginState(true) : setLoginState(false)
  }, [isLoggedIn])


  return (
    <Router>
        <Switch>
          <Route exact path = "/">
            { isLoggedIn ? (
               <Redirect to = "/welcome" />
            ) : (
                <UserLogin />
            )
            }
          </Route>
          <Route path = "/welcome">
            <Welcome />
          </Route>
          <Route path = "/team">
            <Develop />
          </Route>
          <Route path = "/teams">
            <Marketing />
          </Route>
          <Route path = "/ateams">
            <Admin />
          </Route>
          <Route path = "/memberlist">
            <MemberDetails />
          </Route>
          <Route path = "/memberlistM">
            <MemberDetailsM />
          </Route>
          <Route path = "/memberlistA">
            <MemberDetailsA />
          </Route>
          <Route path = "/details">
            <MemberDetails />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
