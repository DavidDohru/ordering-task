import React from 'react';
import { Nav, NavLink } from  'react-bootstrap';
import './NavigationBarResult.css';

export const NavigationBarResult = () => {
  return (
    <>
  <Nav className="navigation-1">
      <div className="navigation__container_res">
        <NavLink>
        <div className="navigation__logo"/>
        </NavLink>
        <div className="navigation__container-stage">
        <div className="navigation__product">
            <span className="no_active">1</span>
            <span className="navigation__product-text">Продукти</span>
        </div>
        <div className="navigation__order">
            <span className="active">2</span>
            <span className="navigation__product-text checked">Оформити замовлення</span>
        </div>
        </div>
    </div>
  </Nav>
  </>
  )
};
