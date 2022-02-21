import React from 'react';
import { FcViewDetails } from 'react-icons/fc';
import { BsFillBrightnessHighFill, BsGearFill, BsMoonStarsFill } from 'react-icons/bs';
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
            <BsMoonStarsFill className="header__menu__icon" />
          ) : (
            <BsFillBrightnessHighFill className="header__menu__icon" />
          )}
        </div>
        <BsGearFill className="header__menu__icon" />
      </div>
    </div>
  );
}
