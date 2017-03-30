import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.css';

class Header extends Component {
  render () {
    return (
      <nav styleName='navbar'>
        <ul>
					<li>
						Sign in
					</li>
        </ul>
      </nav>
		);
  }
}

export default CSSModules(Header, styles);