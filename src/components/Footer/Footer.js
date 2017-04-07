import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './footer.css';

class Footer extends Component {
  render () {
    return (
      <div styleName='footer'>
        2017
      </div>
		);
  }
}

export default CSSModules(Footer, styles);