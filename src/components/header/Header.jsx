import React from 'react';
import { FcViewDetails } from 'react-icons/fc';
import { BsBrightnessHigh, BsGear, BsMoonStars } from 'react-icons/bs';
import './Header.css';

import { ThemeContext } from '../../globalStyle/GlobalStyle';

export default function Header() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className="container__header">
      <div className="header__logo">
        <FcViewDetails className="header__logo__icon" />
        <span className="header__title" style={{ cursor: 'default' }}>
          TODO-app
        </span>
      </div>
      <div className="header__menu">
        <div
          style={{ display: 'flex', transition: 'all 500ms ease' }}
          onClick={toggleTheme}>
          {theme === 'light' ? (
            <BsMoonStars className="header__menu__icon" />
          ) : (
            <BsBrightnessHigh className="header__menu__icon" />
          )}
        </div>
        <BsGear className="header__menu__icon" />
      </div>
    </div>
  );
}
