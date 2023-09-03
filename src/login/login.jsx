import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightToBracket ,faEnvelope ,faLock } from "@fortawesome/free-solid-svg-icons";
import Head from './head';

import "./index.css";
import "../home/app";

const Login = () => {
	const [email, setEmail] = useState("");
	const [passw, setPassw] = useState("");
	
	const navigate = useNavigate();
		
	const mail1= "meenakshi@gmail.com";
	const	pass1= "superman";

function submitform() {
	if(email===mail1 && passw===pass1){
	 navigate("./app")
}else{
	return<h1>wrong password</h1>
}
}
console.log(submitform);
return (
	<div className="main">
		<Head />
		<div className='container'>
			<form action="" className='form'>
			<h1 className='head'>login</h1>
			<label htmlFor="email" id='label'>Email&nbsp;<FontAwesomeIcon icon={faEnvelope} /></label>
				<input type="text" name="email" className="details" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
				<label htmlFor="passw" id='label'>Password &nbsp;<FontAwesomeIcon icon={faLock} /></label>
				<input type="text" name="passw" className="details" value={passw} onChange={(e) => setPassw(e.target.value)} /><br /> 
				<br /> 
				<button input type='button' onClick={submitform} className='button' ><FontAwesomeIcon icon={faRightToBracket} />  login</button>
			</form>
		</div>
		</div>
	)
}

export default Login;