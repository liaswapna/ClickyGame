import React from 'react';
import {Navbar, NavItem} from 'react-materialize'
import './Navbars.css'

const Navbars = () => {
  return (
    <Navbar brand="Clicky Game" right>
      <NavItem onClick={() => console.log("test click")}>
        Getting started
      </NavItem>
      <NavItem href="#">Components</NavItem>
    </Navbar>
  );
};

export default Navbars