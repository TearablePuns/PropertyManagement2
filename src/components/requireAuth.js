import React, {Component} from 'react';
import { connect } from 'react-redux';

import history from '../history'

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if(!this.props.authenticated) {
                history.push('/');
                window.alert('You must log in to view the dashboard.');
            }
        }
        componentWillUpdate(nextProps) {
            if(!nextProps.authenticated) {
                history.push('/');
                window.alert('You must log in to view the dashboard.');
            }
        }
        render() {
            return <ComposedComponent/>
        }
    }

    function mapStateToProps(state) {
        const { authenticated } = state.auth;
        return { authenticated }
    }

    return connect(mapStateToProps)(Authentication)
}