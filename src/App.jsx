import React  from 'react';
import './App.css';
import { Route,BrowserRouter,Routes,useNavigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Signin=lazy(()=>import ('./pages/Signin'));
const Dashboard=lazy(()=>import('./components/Dashboard'));
//import { ReactComponent as Loading } from "./assets/Loading.svg";
import Loading from './assets/Loading';
export default function App(){
  return (
    <div  className='flex flex-col justify-center items-center' >
      <BrowserRouter>
      <Appbar/>
      <Routes>
      <Route path="/" element={<Suspense fallback={<Loading/>}><Signin/></Suspense>} />
      <Route path="/dashboard" element={<Suspense fallback={<Loading/>}><Dashboard/></Suspense>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
  function Appbar(){
    const navigate= useNavigate();
    return(
      <div className='relative top-0  bg-slate-600  h-12 w-full scroll-m-0 '>
        <p className='text-white text-2xl pl-6'>Aiworksquad</p>
        </div>
        )
        }
}