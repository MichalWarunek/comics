
import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
 } from 'reactstrap';


class Menu extends React.Component {
 

  render() {
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          
          <Collapse  navbar>
            <Nav className="ml-auto" navbar>

             <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  HOME
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  BLOG
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  PAGES
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#">PRIVACY POLICY</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">TERMS AND CONDITION</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


export default Menu;
