import React from 'react';

import './header.scss';

const Header = () => (
  <header className="header">
    <nav>
      <a className="header__link header__link--active" href="">Accueil</a>
      <a className="header__link" href="">Angular</a>
      <a className="header__link" href="">React</a>
      <a className="header__link" href="">O'clock</a>
      <a className="header__link" href="">Autre</a>
    </nav>
  </header>
);

export default Header;
