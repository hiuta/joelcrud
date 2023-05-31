import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          {/* Agrega más elementos de menú según sea necesario */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
