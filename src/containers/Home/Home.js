import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.css';
import Header from '../../components/Header/Header';
//import Footer from '../../components/Footer/Footer';

class Home extends Component {
  render () {
    return (
      <div styleName='container'>
				<Header />
				{this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  children: React.PropTypes.object
};

export default CSSModules(Home, styles);