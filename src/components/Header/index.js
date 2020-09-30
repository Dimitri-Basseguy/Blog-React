import React from 'react';
import PropTypes from 'prop-types';
// https://reactrouter.com/web/api/NavLink
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = ({ categories }) => (
  <header className="header">
    <nav>
      {categories.map((category) => (
        <NavLink
          exact /* égale exact=true */
          to={category.route}
          key={category.label}
          className="header__link"
          activeClassName="header__link--active"
        >
          {category.label}
        </NavLink>
      ))}
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
