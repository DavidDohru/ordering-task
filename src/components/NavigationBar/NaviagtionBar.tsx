import React from 'react';
import { Nav, NavLink, Form } from  'react-bootstrap';
import './NavigationBar.css';

export const NavigationBar = () => {
  return (
    <>
  <Nav className="navigation">
      <div className="navigation__container">
        <NavLink>
        <div className="navigation__logo"/>
        </NavLink>
        <div className="navigation__container-stage">
        <div className="navigation__product">
            <span className="navigation__product-current_stage">1</span>
            <span className="navigation__product-text">Продукти</span>
        </div>
        <div className="navigation__order">
            <span className="navigation__product-stage">2</span>
            <span className="navigation__product-text checked">Оформити замовлення</span>
        </div>
        </div>
        <div className="navigation__container-select">
        <Form.Select aria-label="Floating label select example">
          <option value="ukr">Українська</option>
          <option value="rus">Русский</option>
          <option value="eng">English</option>
        </Form.Select>
        <Form.Select aria-label="Floating label select example">
          <option value="uah">UAH</option>
          <option value="rub">RUB</option>
          <option value="usd">USD</option>
        </Form.Select>
        </div>
    </div>
  </Nav>
  </>
  )
}