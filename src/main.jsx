
import { createRoot } from 'react-dom/client'

import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';
import './Index.css';
;

import Contact from './assets/Components/Contact';
import Home from './assets/Components/HOme';    
import About from './assets/Components/About';
import Layout from './assets/Components/Layout';
import Login from './assets/Components/Login';
import Privacy from './assets/Components/Privacy';
import Terms from './assets/Components/Terms';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  
  
)
