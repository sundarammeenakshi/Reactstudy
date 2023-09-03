import { useState, useEffect } from "react";
import Model from "./model";
import Body from "./body";
import React from "react";
import "./app.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";


function Faq() {
   
    const [user, setUser] = useState([]);
    

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUser(data);
            }
        }
        catch (e) {
            console.error();
        }
    }
    useEffect(() => {
        fetchUsers({ user });
    }, [])

   



    return (
        <>
            <div className="buttonplace">
                <button onClick={<Model />} className="button1"><FontAwesomeIcon icon={faPlus} />
              
                 
                </button> </div>
                
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    <Body user={user} />
                </tbody>
            </table>
        </>
    );
}




export  default Faq;