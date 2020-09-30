import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ categories, currentCategory }) => (
  <header className="header">
    <nav>
      {categories.map((category) => {
        const className = (category.label === currentCategory ? 'header__link header__link--active' : 'header__link');
        return (
          <a key={category.label} className={className} href="">{category.label}</a>
        );
      })}
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Header;
