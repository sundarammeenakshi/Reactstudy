import React from "react";
import  Body  from "./body";

import { useState } from "react";



const Model=()=>{
    
const [email, setEmail] = useState("");
const [passw, setPassw] = useState("");



    return(
<div className='container'>
<form className='form'>
    <label htmlFor="email" id='label'>Email</label>
    <input type="text" name="email" placeholder="enter the email" className="details" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
    <label htmlFor="passw" id='label'>Password </label>
    <input type="text" name="passw" placehoder="enter the password" className="details" value={passw} onChange={(e) => setPassw(e.target.value)} /><br />
    <br />
    <button input type='button' onClick={<Body />} > submit</button>
</form>
</div>
    );
}
 export default Model;