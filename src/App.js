// /client/src/App.js

import React from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Page from './components/Page';

import HomePage from './pages/HomePage/HomePage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import ServicesPartsPage from './pages/ServicesPartsPage/ServicesPartsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import AdminLoginPage from './pages/Admin/AdminLoginPage'
import AdminPanel from './pages/Admin/AdminPanel'



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Page component={HomePage} />} />
          <Route exact path="/inventory" element={<Page component={InventoryPage} />} />
          <Route exact path="/services-parts" element={<Page component={ServicesPartsPage} />} />
          <Route exact path="/contact-us" element={<Page component={ContactUsPage} />} />
          <Route exact path="/admin-login" element={<Page component={AdminLoginPage} />} />
          <Route exact path="/admin-panel" element={<Page component={AdminPanel} />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
