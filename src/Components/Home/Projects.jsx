import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('All')
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
                    <button onClick={()=> setFilter('all') } className={`${filter === 'all' ? 'bg-blue-700 ' : '' } btn btn-outline btn-secondary `}>All</button>
                    <button onClick={()=> setFilter('Frontend') } className={` ${filter === 'Frontend' ? 'bg-blue-700 ' : '' } btn btn-outline btn-secondary `}>Frontend</button>
                    <button onClick={()=> setFilter('Backend') } className={` ${filter === 'Backend' ? 'bg-blue-700 ' : '' } btn btn-outline btn-secondary `}>Backend</button>
                    <button onClick={()=> setFilter('Fullstack') } className={` ${filter === 'Fullstack' ? 'bg-blue-700 ' : '' } btn btn-outline btn-secondary `}>Fullstack</button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                {
                    projects.filter(proj=> proj.type.toLowerCase().includes(filter.toLowerCase())).map(p => {
                        return <div className=" rounded-lg w-[350px] glass mx-auto mb-5">
                            <figure><img className='w-full rounded-t-lg' src={p.img} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{p.name}</h2>
                                <p>{p.detail}</p>
                                <div className="card-actions justify-end">
                                    <div className="btn-group m-auto">
                                        <a href={p.live} className="btn  btn-glass font-light  btn-sm rounded-none">Live Site</a>
                                        <a href={p.github} className="btn btn-glass font-light  btn-sm rounded-none">GitHub</a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    })
                } </div>

        </div>
    );
};

export default Projects;