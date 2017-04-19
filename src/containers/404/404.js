import React from 'react';
import styles from './404.css';
import CSSModules from 'react-css-modules';

const Not_Found = () => {
  return (
    <div styleName="error">
      404 not found!
    </div>
  );
};

export default CSSModules(Not_Found,styles);
