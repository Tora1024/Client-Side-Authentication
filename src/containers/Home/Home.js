import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.css';
import Header from '../../components/Header/Header';

class Home extends Component {
  render () {
    return (
      <div styleName='container'>
				<Header />
				{this.props.children}
				<h1>hola</h1>
      </div>
	);
  }
}

export default CSSModules(Home, styles);