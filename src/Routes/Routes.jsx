import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Components/Layout/Main';
import Home from '../Components/Home/Home';
import Projects from '../Components/Home/Projects';
import Contact from '../Components/Contact/Contact';
import Blog from '../Components/Blog/Blog';
import About from '../Components/About/About';
import NotFound404 from '../Components/NotFound/NotFound';
// import About from '../Components/About/About';
// import Blog from '../Components/Blog/Blog';
// import Contact from '../Components/Contact/Contact';
// import Home from '../Components/Home/Home';
// import Projects from '../Components/Home/Projects';
// import Main from '../Components/Layout/Main';
// import NotFound from '../Components/NotFound/NotFound';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/' ,
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            
            {
                path: '/about',
                element: <About />
            },
            {
                path: '*',
                element: <NotFound404 />
            },
            
        ]
    },
    
    
])

export default routes;