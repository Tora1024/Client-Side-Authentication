import React, { Component } from 'react';
import styles from './feature.css';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Feature extends Component {
	componentWillMount() {
		this.props.fetchMessage();
	}

	render() {
		return (
			<div styleName="wrapper">{ this.props.message }</div>
		);
	}
}

function mapStateToProps(state) {
	return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(CSSModules(Feature, styles));