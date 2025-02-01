import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import ParticleBG from './ParticleBG';


const Main = () => {
    return (
        <div className=''>
           <Navbar></Navbar> 
           <ParticleBG></ParticleBG>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;