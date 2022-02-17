import React from 'react';
import { FcTodoList, FcSettings, FcPortraitMode, FcNightPortrait } from 'react-icons/fc';
import './Header.css';

export default function Header() {
  return (
    <div className="container__header">
      <div className="header__logo">
        <FcTodoList className="header__logo__icon" />
        <span className="header__title" style={{ cursor: 'default' }}>
          TODO-app
        </span>
      </div>
      <div className="header__menu">
        <FcPortraitMode className="header__menu__icon" />
        <FcNightPortrait className="header__menu__icon" />
        <FcSettings className="header__menu__icon" />
      </div>
    </div>
  );
}
