import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';\
import { Navbar } from './Navbar.jsx';
import { Maincontent } from './Maincontent.jsx';
import { Form } from './Form.jsx';
import { Footer } from './Footer.jsx';
import { Demo } from './Components/Demo.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
const a= {
 services: "MNC_services",
 product: "MNC_products",
 contact: "MNC _CONTACT",    
}

root.render(
    <React.StrictMode>
    {/* <Demo/> */}
    {/* <Navbar data={a}/> */}
     <Maincontent/>
     {/* <Form/> */}
     {/* <Footer/> */}
  </React.StrictMode>
);
