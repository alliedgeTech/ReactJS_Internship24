import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';\
import { Navbar } from './Navbar.jsx';
import { Maincontent } from './Maincontent.jsx';
import { Form } from './Form.jsx';
import { Footer } from './Footer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
     <Maincontent/>
     <Form/>
     <Footer/>
  </React.StrictMode>
);
