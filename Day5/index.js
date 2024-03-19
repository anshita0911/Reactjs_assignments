import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from 'C:/Users/abanthia/Downloads/react_assignments/my-project/src/reportWebVitals.js';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from 'C:/Users/abanthia/Downloads/react_assignments/my-project/src/components/Contact.js';
import About from 'C:/Users/abanthia/Downloads/react_assignments/my-project/src/components/About.js';
import Emps from 'C:/Users/abanthia/Downloads/react_assignments/my-project/src/components/Emps.js';
import Depts from 'C:/Users/abanthia/Downloads/react_assignments/my-project/src/components/Depts.js';
import NotFound from 'C:/Users/abanthia/Downloads/react_assignments/my-project/src/components/NotFound.js';
import Details from 'C:/Users/abanthia/Downloads/react_assignments/my-project/src/components/Details.js';
import ProtectedRoute from 'C:/Users/abanthia/Downloads/react_assignments/my-project/src/components/ProtectedRoute.js';
import Login from 'C:/Users/abanthia/Downloads/react_assignments/my-project/src/components/Login.js';
import Logout from 'C:/Users/abanthia/Downloads/react_assignments/my-project/src/components/Logout.js';


const routing = (
  <Router>

    <div style={{ textAlign: "center" }} >
      <h3>Routing in React JS</h3>
      <hr />
      <Link to="/">Home  </Link>  | 
      <Link to="/Emps">  Employees  </Link>  | 
      <Link to="/Depts">  Deptartments  </Link>  | 
      <Link to="/About">  About Us  </Link>  | 
      <Link to="/Contact">  Contact Us  </Link>  | 
      <Link to="/Hello">  Invalid  </Link>  | 
      <Link to="/Login">  Login</Link>  | 
      <Link to="/Logout">  Logout</Link>
      <hr />
    </div>



    <Routes>
      <Route path="/" element={<App />} />

      <Route path="emps" element={ 
         <ProtectedRoute  returnUrl="/Emps">
              <Emps />
         </ProtectedRoute>  
       } />

      <Route path="/Depts" element={
           <ProtectedRoute  returnUrl="/Depts">
                 <Depts />
           </ProtectedRoute>           
        } />
        {/* <Route path="/Logout" element={
            <ProtectedRoute  returnUrl="/">
                 <Logout />
           </ProtectedRoute>   
      } /> */}
     
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={ <Login />} />
      <Route path="/Logout" element={ <Logout />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  </Router>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);


reportWebVitals();
