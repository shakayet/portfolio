import logo from './logo.svg';
import './App.css';
import routes from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    
    <RouterProvider router={routes} ></RouterProvider>

  );
}

export default App;
