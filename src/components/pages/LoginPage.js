import React, {Component} from "react";
import LoginForm from "../forms/LoginForm";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Constants from "../../constants/Constants"
import {login} from '../../actions/auth'

class LoginPage extends Component {

    submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render() {
        gtag('config', Constants.GA_TRACKING_ID, {
            'page_title' : 'Login Page',
            'page_path': '/login'
        });

        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null,{login}) (LoginPage);