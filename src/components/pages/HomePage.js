import React, {Component} from "react";
import {Link} from "react-router-dom";
import Constants from "../../constants/Constants"

class HomePage extends Component {
    render() {
        gtag('config', Constants.GA_TRACKING_ID, {
            'page_title' : 'Home Page',
            'page_path': '/'
        });

        return (
            <div>
                <h1>Home Page</h1>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}

export default HomePage;