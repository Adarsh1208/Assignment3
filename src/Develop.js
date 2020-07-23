import React, { useEffect } from 'react';
import './App.css';
import './Developer.css';
import Nav from "./Nav";
import { Link } from 'react-router-dom';

function Develop() {

    const [devList, setDevList] = React.useState([]);


    useEffect ( () => {
        fetchApi();
    }, [])
    
    async function fetchApi(){
        let response = await fetch("https://yayjk.dev/api/members/team/development");
        let data = await response.json();
        setDevList(data.teamMembers);
    }

    let jD = 0;
    let sD = 0;

    devList.map((values, index) => {
        if(values.position === "Senior Dev" || values.position === "Team leader"){
            sD += 1;
        }else if(values.position === "Junior Dev"){
            jD += 1;
        }
    })

  return (
      <div>
          <Nav />
          <div className = "header">
                <h1>Welcome to Developer Analysis</h1>
                <h3 id = "tag">Here is team Analysis</h3>
            </div>

            <div className = "dBox">
                <h3>Total Members : {devList.length}</h3>
                <h3>Junior Devs : {jD}</h3>
                <h3>Senior Devs : {sD}</h3>
                <Link to = "/memberlist" id = "memberlink">view full member list</Link>
            </div>
      </div>

   
  );
}

export default Develop;
