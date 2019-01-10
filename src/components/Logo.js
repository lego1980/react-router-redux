import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/logo.css';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return <img src={logo} className='logo' alt={this.props.alt} />;
    }
}