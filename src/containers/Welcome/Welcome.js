import React from 'react';
import styles from './welcome.css';
import CSSModules from 'react-css-modules';

const Welcome = () => <div styleName="welcome">Welcome!</div>;

export default CSSModules(Welcome, styles);