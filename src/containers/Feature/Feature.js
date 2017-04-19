import React, { Component } from 'react';
import styles from './feature.css';
import CSSModules from 'react-css-modules';

class Feature extends Component {
	render() {
		return (
			<div styleName="wrapper">This is a feature</div>
		);
	}
}

export default CSSModules(Feature, styles);