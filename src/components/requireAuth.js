import React, {Component} from 'react';
import { connect } from 'react-redux';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if(!this.props.authenticated) {
                this.props.history.push('/')
            }
        }
        componentWillUpdate() {

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