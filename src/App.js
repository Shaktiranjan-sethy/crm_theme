import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';  // Your Sidebar Component
import Header from './components/Header';  // Example Component

const App = () => {

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuCollapsed(!isMenuCollapsed);
         
    };  

  return (
    <Router>
      <Sidebar />
      <div class="flapt-page-content">
      <Header onButtonClick={handleMenuToggle} /> 
      </div> 
    </Router>
  );
};

export default App;
