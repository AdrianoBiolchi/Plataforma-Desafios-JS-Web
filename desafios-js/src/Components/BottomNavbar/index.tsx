import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const BottomNavbar: React.FC = ({ }) => {
  return (
    <nav className="bottomNavBar">
      <Link to="/home" className="nav-link">
        <i className="fas fa-home" /> <span>Home</span>
      </Link>
      <Link to="/home" className="nav-link">
        <i className="fas fa-search" /> <span>Pesquisar</span>
      </Link>
      <Link to="/perfil" className="nav-link">
        <i className="fas fa-user" /> <span>Perfil</span>
      </Link>
    </nav>
  );
}

export default BottomNavbar;
