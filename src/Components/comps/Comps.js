import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
const Comps = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='container m-auto  animate__fadeIn animate__animated'>
            <h2 className="text-2xl text-center">PROJECTS</h2>
            <div className="flex w-full justify-center items-center">
                <div className="btn-group  my-5 mx-auto ">
                    <button className="btn btn-outline btn-secondary ">All</button>
                    <button className="btn btn-outline btn-secondary ">Frontend</button>
                    <button className="btn btn-outline btn-secondary ">Backend</button>
                    <button className="btn btn-outline btn-secondary ">Fullstack</button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            
                 </div>
                
        </div>
    );
};

export default Comps;