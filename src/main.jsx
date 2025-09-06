import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail'; // Import this at the top


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 800, once: true });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="blogs/:slug" element={<BlogDetail />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
