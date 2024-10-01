import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Herobanner from './components/Herobanner';
import Main from './components/Main';
import Adventure from './components/Adventure';
import Luxury from './components/Luxury';
import Magic from './components/Magic';
import Mystery from './components/Mystery';
import Adrenaline from './components/Adrenaline';
import Footer from './components/Footer';




function App() {
  const location = useLocation(); // Get the current location

  const excludedPaths = ['/adventure', '/luxury', '/magic', '/mystery', '/adrenaline']; // Array of paths to exclude

  return (
    <>
      <NavBar />
      {/* Only render Herobanner if not on any of the specified pages */}
      {!excludedPaths.includes(location.pathname) && <Herobanner />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/luxury" element={<Luxury />} />
        <Route path="/magic" element={<Magic />} />
        <Route path="/mystery" element={<Mystery />} />
        <Route path="/adrenaline" element={<Adrenaline />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

// Wrap your App component with Router in index.js
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
