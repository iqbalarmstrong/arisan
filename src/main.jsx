import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import About from './about.jsx';
import './App.css';
import './header.css';
import './footer.css';

function Home() {
  return (
    <>
      <Header />
      <App />
      <Footer />
    </>
  );
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
