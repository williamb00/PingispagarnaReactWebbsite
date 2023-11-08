import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Views/Home';
import Contacts from './Views/Contacts';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Contacts" element={<Contacts />} />
      {/* Lägg till fler Route-komponenter för andra sidor om det behövs */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
