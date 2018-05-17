import React, {Component} from "react";
import LoginForm from "../forms/LoginForm";
import Constants from "../../constants/Constants"

class LoginPage extends Component {

    submit = (data) => {
        console.log(data);
    };

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

export default LoginPage;