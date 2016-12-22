import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class App extends Component {
  redirect(pageTo) {
    browserHistory.push('/' + pageTo);
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand onClick={ this.redirect.bind(this, '') } >
              <img id='logo-image' src='../../assets/products/logo.png'/>
              <span id='logo-name'>Peony Garden</span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} onClick={ this.redirect.bind(this, '') } >Home</NavItem>
              <NavItem eventKey={2} onClick={ this.redirect.bind(this, 'products') } >Products</NavItem>
              <NavItem eventKey={2} onClick={ this.redirect.bind(this, 'contact') } >Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <div className="Site-content">
          {this.props.children && React.cloneElement(this.props.children, {

          })}
        </div>

        <div className="footer">
          <div className="col-xs-12 text-center">
                <strong>© 2016 Peony Garden, Inc.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>Follow Us:
            <span className="text-right">
              <a href="https://www.facebook.com/peonygarden.inc">
                <img className='social-media-icon' src='../../assets/facebook-icon.png' />
              </a>
              <a href="https://www.instagram.com/peonygardenceramics">
                <img className='social-media-icon' src='../../assets/instagram.png' />
              </a>
            </span>
          </div>
        </div>

      </div>
    );
  }
}

// *********************

            //   <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            //     <MenuItem eventKey={3.1}>Action</MenuItem>
            //     <MenuItem eventKey={3.2}>Another action</MenuItem>
            //     <MenuItem eventKey={3.3}>Something else here</MenuItem>
            //     <MenuItem divider />
            //     <MenuItem eventKey={3.3}>Separated link</MenuItem>
            //   </NavDropdown>
            // </Nav>
            // <Nav pullRight>
            //   <NavItem eventKey={1} href="#">Link Right</NavItem>
            //   <NavItem eventKey={2} href="#">Link Right</NavItem>
