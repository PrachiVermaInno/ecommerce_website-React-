import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-logo">
          Prachi Store
        </Link>
        <Link to="/" >
          <span className="button1">Home</span>
        </Link>
      </div>
      <div className="header-icons">
        <Link to="/cart" className="header-icon-link" title="Cart">🛒</Link>
        <Link to="/notifications" className="header-icon-link" title="Notifications">🔔</Link>
        <Link to="/profile" className="header-icon-link" title="Profile">👤</Link>
      </div>
    </header>
  );
}

export default Header;
