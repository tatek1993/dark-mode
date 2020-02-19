import React, { useState } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  //  const [darkMode, setDarkMode] = useLocalStorage('this is the key for toggle', false);

  const [darkMode, setDarkMode] = useDarkMode('this is the key for dark mode', darkMode)
 

  console.log(setDarkMode);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  


  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
