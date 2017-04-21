import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import CSSModules from 'react-css-modules';
import styles from './header.css';
import { Link } from 'react-router';

class Header extends Component {
  renderSigninText() {
    if (this.props.auth && (typeof this.props.auth !== 'undefined')) {
      return (
        <ul>
          <li>
            <Link to="/feature" styleName="navbar_link">Feature</Link>
          </li>
          <li>
            <Link to="/signout" styleName="navbar_link">Sign out</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to="/signin" styleName="navbar_link">Sign in</Link>
          </li>
          <li>
            <Link to="/signup" styleName="navbar_link">Sign up</Link>
          </li>
        </ul>
      );
    }
  }

  render () {
    return (
      <nav styleName='navbar'>
        <Link to="/" styleName="navbar_link">Home</Link>
            { this.renderSigninText() }	
      </nav>
		);
  }
}

Header.propTypes = {
  //auth: React.PropTypes.boolean
};

function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(CSSModules(Header, styles));