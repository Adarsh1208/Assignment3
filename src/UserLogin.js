import React, {useState} from 'react';
import './App.css';
import Nav from "./Nav";
import {Link} from "react-router-dom";

function UserLogin() {

        let username = "admin";
        let password = "password";

    const [isLoggedIn , setLoggedIn] = useState(false)
    const [error, seterror] = useState(false)

    let usernameValue ;
    const getValues =  (e) => {
        usernameValue = e.target.value;
    }

    let passwordValue ;
    const getPasswordValues = (e) => {
        passwordValue = e.target.value;
    }

    const checkForAuth = () => {
         console.log("username " + usernameValue + ", password " + passwordValue);
        if(username === usernameValue && password === passwordValue){
           setLoggedIn(true) 
           localStorage.setItem("loggedin", true); 
           window.location.reload();
        } 
        else {
            seterror (true)
        }
    }


  return (
      <div>
          <Nav />
        <div className = "userloginStyle">
            <form className = "box">
            <h1>Login</h1>
            <input type = "text" placeholder = "username" onChange = {getValues} />
            <input type = "password" placeholder = "password" onChange = {getPasswordValues}/>
            <button className = "button" onClick = {checkForAuth}>Login</button>

          {
              (error) && <h1>Please enter correct credentials</h1>
          }

          <Link to = "/welcome">Welcome Page</Link>
        </form>
        </div>
        
          
      </div>
   
  );


}

export default UserLogin;
