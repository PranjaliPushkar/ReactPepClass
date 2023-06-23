import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';

function App() {
  useEffect(() => {
    document.title = 'SummerPepClass-HW1';
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;