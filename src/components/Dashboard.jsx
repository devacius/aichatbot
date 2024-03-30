import React, { useState } from "react";
import history from "../assets/history.svg";
import arrow from "../assets/arrow.png";
import edit from "../assets/editing.png";
import delet from "../assets/delete.png";
import message from "../assets/message.png";
import user from "../assets/user.png";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
export default function Dashboard() {
  const [department,setDepartment]=useState("");

  return (
    <div className="flex flex-row justify-center items-center h-auto w-screen relative">
      <div className="absolute top-0 w-screen h-16  px-4 items-center flex flex-row" style={{ backgroundColor: "#0095A9" }}>
        <div className="p-4 w-46 h-12 font-bold rounded items-center text-2xl justify-center" style={{backgroundColor:'#EBFDFF'}}>AiWorkSquad</div>
        <div className="ml-auto w-52 h-10 bg-white flex flex-col items-center justify-center rounded-lg">
        <Menu>
      <MenuHandler>
        <Button color="white" className="w-52 h-32 flex flex-col items-center justify-center rounded-lg" >Department:{department}</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={()=>{
          setDepartment("Sales");
        }}>Sales </MenuItem>
        <MenuItem onClick={()=>{
          setDepartment("Marketing");
        }}>Marketing </MenuItem>
      </MenuList>
    </Menu>
 </div>
        <div className="h-4 w-32 flex flex-row justify-center items-center text-white">Nitin</div>
      </div>
      <div className="grid grid-cols-4 gap-4 h-auto w-screen mt-16 py-9">
        <div className="pt-5 pb-14 px-4">
          <div className="flex flex-col items-center border-2 border-slate-400 h-auto px-4 py-4">
            <div className="flex flex-col justify-center items-center border-2 border-gray-300 w-full h-10">
              + New Chat
            </div>
            <div className="flex flex-row place-items-center py-4 w-full justify-center">
              <div className="h-4 w-4 ">
                <img src={history} alt="shit" />
              </div>
              <div className="pl-10">History</div>
            </div>
            <div className="flex flex-row items-center py-2 w-full ">
              <div className="h-4 w-4">
                <img src={message} alt="message" />
              </div>
              <div className="pl-4">New Chat </div>
              <div className="flex flex-row ml-auto space-x-3">
                <div className="h-4 w-4">
                  <img src={edit} alt="editing" />
                </div>
                <div className="h-4 w-4">
                  <img src={delet} alt="delete" />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 w-full ">
              <div className="h-4 w-4">
                <img src={message} alt="message" />
              </div>
              <div className="pl-4">New Chat </div>
              <div className="flex flex-row ml-auto space-x-3">
                <div className="h-4 w-4">
                  <img src={edit} alt="editing" />
                </div>
                <div className="h-4 w-4">
                  <img src={delet} alt="delete" />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 w-full ">
              <div className="h-4 w-4">
                <img src={message} alt="message" />
              </div>
              <div className="pl-4">New Chat </div>
              <div className="flex flex-row ml-auto space-x-3">
                <div className="h-4 w-4">
                  <img src={edit} alt="editing" />
                </div>
                <div className="h-4 w-4">
                  <img src={delet} alt="delete" />
                </div>
              </div>
            </div>
            <div className="w-full mt-72 space-y-4">
              <div className="flex flex-row items-center w-full ">
                <div className="h-4 w-4">
                  <img src={message} alt="message" />
                </div>
                <div className="pl-4">Upgrade to plus </div>
              </div>
              <div className="flex flex-row items-center w-full ">
                <div className="h-4 w-4">
                  <img src={message} alt="message" />
                </div>
                <div className="pl-4">Updates </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 py-4 space-y-4 flex flex-col ">
          <div className="w-auto h-28 border-2 border-gray-300 px-3">
            <p className="text-3xl font-bold pb-7">
              
              Introduce yourself to AIWorkSquad
            </p>
            <p className="text-gray-500">
            
              Im Deepansh , CEO of IT startup company in India
            </p>
          </div>
          <div
            className="ml-auto top-32 flex flex-col-reverse justify-center items-center h-16 w-72 border-2 text-lg text-white"
            style={{ backgroundColor: "#0095A9" }}
          >
            What is marketing?
          </div>
          <div
            className="mr-8 flex flex-col justify-center items-center w-auto h-32 border-2 p-2"
            style={{ borderColor: "#0095A9", color: "#0095A9" }}
          >
            Marketing refers to the process of promoting and selling products or
            services to customers. It invoives researching customer needs and
            wants, developing products and services that meet those needs,
            pricing products and sorvices appropriately.creating markoting
            materials to promote products and services, and distributing those
            materials through various channels to reach potential customers. The
            ultimate goal of marketing is to generate interest and increase
            sales for a business or organization.
          </div>
          <div
            className="ml-8 top-32 flex flex-col-reverse justify-center items-center min-h-16 min-w-72  border-2 text-lg text-white p-4"
            style={{ backgroundColor: "#0095A9" }}
          >
            Give me a list of top 5 digital marketing agencies near me who
            offers services like social media marketing, content marketing and
            influencer marketing
          </div>
          <div
            className="mr-8 flex flex-row  items-self w-auto h-auto border-2 p-2 border-gray-300 space-x-7 p2"
            style={{ color: "#0095A9" }}
          >
            <p className="pl-8">Enter your {department} query here... </p>
            <div className="h-auto w-auto pl-80">
              <img src={arrow} alt="shit" />
            </div>
          </div>
          <div className="w-auto h-auto pt-12">
          <Input placeholder="" label="Enter your text here"></Input>
          </div>
        </div>
       
      </div>
    
    </div>
  );
}
