import React, { useEffect } from 'react';
import './App.css';
import './Developer.css';
import Nav from "./Nav";
import { Link } from 'react-router-dom';

function Marketing() {

    const [devList, setDevList] = React.useState([]);


    useEffect ( () => {
        fetchApi();
    }, [])
    
    async function fetchApi(){
        let response = await fetch("https://yayjk.dev/api/members/team/marketing");
        let data = await response.json();
        setDevList(data.teamMembers);
    }



  return (
      <div>
          <Nav />
          <div className = "header">
                <h1>Welcome to Marketing Analysis</h1>
                <h3 id = "tag">Here is team Analysis</h3>
            </div>

            <div className = "dBox">
                <h3>Total Members : {devList.length}</h3>

                {devList.map((values, index) => {
                   return <h3>{values.position} : 1</h3>
                } )
            }
                
                <Link to = "/memberlistM" id = "memberlink">view full member list</Link>
            </div>
      </div>

   
  );
}

export default Marketing;
