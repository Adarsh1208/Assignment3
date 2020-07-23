import React, { useEffect } from 'react';
import './App.css';
import './MemberDetails.css';
import Nav from "./Nav";
import { Link, useParams } from 'react-router-dom';

function Develop({match}) {

    const [memberList, setmemberList] = React.useState([]);


    useEffect ( () => {
        fetchApi();
    }, [])
    

    async function fetchApi(){
        let response = await fetch("https://yayjk.dev/api/members/team/marketing");
        let data = await response.json();
        setmemberList(data.teamMembers);
    }

  return (
      <div>
            <Nav />
            <table id = "members">
                <tr>
                    <th>Sl No.</th>
                    <th>Name</th>
                    <th>Date Of Joining</th>
                    <th>View</th>
                </tr>
                    {
                        memberList.map((values, index) => {
                             return <tr>
                                <td>{index +1}</td>
                                <td>{values.name.toUpperCase()}</td>
                                <td>{values.dateOfJoining.split('T')[0]}</td>
                                <td><Link to = "/details">view more</Link></td> 
                            </tr>
                        })
                    }
                
            </table>
      </div>

   
  );
}

export default Develop;
