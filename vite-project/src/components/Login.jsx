import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import './Login.css'


const Login = () => {
	const [sign,setsign]=useState("SignIn"); 
	const[username,setusername]=useState("");
	const[password,setpassword]=useState("");
	const navigate = useNavigate();
 async	function handlesignIn(e){
		e.preventDefault();
		
		if(username=="" || password==""){
			alert("Enter valid information");
			return;
		}
		let url=import.meta.env.VITE_URL;
		console.log(url);
		let response=await axios.post(url+"login",{
			username,password
		});
		console.log(response);
		if(response.data=="No user found"){
			alert(response.data);
		}
		else if(response.data=="Password did not match"){
			alert(response.data);
		}
		else {
			localStorage.setItem("token1212",response.data.token);
		    navigate("/home");
		}
	}
	async function handlesignup(e){
  e.preventDefault();
  if(username=="" || password==""){
	alert("Enter valid information");
	return;
}
let url=import.meta.env.VITE_URL;
console.log(url);

let response=await axios.post(url+"signup",{
	username,password
});
console.log(response);

if(response.data=="User already exits"){
	alert(response.data);
}
else{
	localStorage.setItem("token1212",response.data.token);
	navigate("/home");
}
}


useEffect(()=>{
 let x=localStorage.getItem("token1212");
 if(x){
	navigate("/home")
 }

},[])

	
	

  return (
    <div>
		<div className="bodywraper">
        <div className="box">
		<form autocomplete="off">
			<h2>{sign}</h2>
			<div class="inputBox">
				<input type="text" required="required" onChange={(e)=>{
					setusername(e.target.value);
				}}/>
				<span>Username</span>
				<i></i>
			</div>
			<div class="inputBox">
				<input type="password" required="required" onChange={(e)=>{
					setpassword(e.target.value);
				}}/>
				<span>Password</span>
				<i></i>
			</div>
			<div class="links">
				<a href="#">Forgot Password ?</a>
				<a href="#" onClick={(e)=>{
                   e.preventDefault();
				   if(sign=="SignIn"){
                  setsign("SignUp");
				   }
				   else setsign("SignIn")
				}}>{sign=="SignIn" ? "SignUp":"SignIn"}</a>
			</div>
		{	sign =="SignIn" ?<input type="submit" value={sign} onClick={handlesignIn} />: <input type="submit" value={sign} onClick={handlesignup} /> }
		</form>
	</div>
	</div>
    </div>
  )
}

export default Login