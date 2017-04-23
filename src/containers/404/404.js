import React from 'react';
import styles from './404.css';
import CSSModules from 'react-css-modules';
import Header from '../../components/Header/Header';

const Not_Found = () => {
  return (
    <div styleName="container">
			<Header />
      <div styleName="error">Error 404, page not found!</div>
    </div>
  );
};

export default CSSModules(Not_Found,styles);
