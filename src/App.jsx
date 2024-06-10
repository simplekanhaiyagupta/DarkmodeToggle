import { useEffect, useState } from 'react';
import './App.css';
import './DarkMode.css';


 
  const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, [isDarkMode]);
  
    const toggleDarkMode = () => {
      setIsDarkMode(prevMode => !prevMode);
    };
  return (
     <>
      <h1> DARK MODE TUGGLE BUTTON  BUTTON </h1>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
      
    </>
  );
}


export default App
