import React, { useState } from "react";
import { Checkbox, Input, Button } from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

export default function Signin() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  return (
    <div
      style={{ backgroundColor: "#323842", fontFamily: "Manrope" }}
      className=" w-full h-screen flex flex-col justify-center items-center relative "
    >
      <div className="absolute top-0 h-20 w-full text-white text-2xl px-5">AiWorkSquad </div>
      <div style={{ backgroundColor: "#171A1F" }} className=" w-1/3 h-2/3">
        <div className="flex flex-col justify-center items-center py-3">
          <p className="text-3xl text-white pb-6">Welcome Back</p>
          <p className="text-xl text-white pb-16">
            {" "}
            Sign in to continue to Aiworksquad
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 pb-5">
          <div className=" flex flex-col justify-center items-center h-14 w-2/3  space-y-3 pb-5">
            <Input type="email" label="Email" color="white" size="lg" onChange={(e)=>{
              setEmail(e.target.value);
            }} />
            <Input label="Password" color="white" size="lg" onChange={(e)=>{
              setPassword(e.target.value);
            }}/>
          
        </div>
        <div className="flex flex-row items-center">
          <Checkbox id="ripple-on" label="Remember Me" ripple={true} />
          <p className="text-white pl-36"> Forgot password?</p>
        </div>
        <div className="flex flex-col justify-center items-center h-14 w-32 ">
          <Button variant="filled" size="md" color="blue" fullWidth onClick={()=>{
            
            if(email==="user123" && password==="pass123"){
              navigate("/dashboard")
            }
          }}>
            Sign In
          </Button>
        </div>
        </div>
      </div>
      <footer  className='absolute bottom-0 text-white'  style={{ backgroundColor: "#323842", fontFamily: "Manrope" }}> 2023 Aiworksquad</footer>
    </div>
  );
}
