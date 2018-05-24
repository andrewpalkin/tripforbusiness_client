import React from "react";
import {Button, Form, Message} from "semantic-ui-react";
import PropTypes from "prop-types";
import validator from "validator";
import InlineError from "../messages/InlineError";

class LoginForm extends React.Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {},
        apiResponseError: ''
    };

    onChange = event => this.setState({
        data: {...this.state.data, [event.target.name]: event.target.value}
    });

    onSubmit = () => {
        const {data} = this.state;
        const errors = this.validate(data);

        this.setState({errors});

        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(data)
                .catch(error => {
                    if (error.response) {
                        this.setState({apiResponseError: error.response.data.message});
                    }
                    this.setState({loading: false});
                });
        }
    };

    validate = (data) => {
        const errors = {};

        if (!validator.isEmail(data.email)) errors.email = "Invalid email.";
        if (!data.password) errors.password = "Can't be blank.";

        return errors;
    };

    render() {
        const {data, errors, loading, apiResponseError} = this.state;

        gtag('event', 'login', {method: 'LoginForm'});

        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
                {apiResponseError && (
                    <Message negative>
                        <Message.Header>Something went wrong</Message.Header>
                        <p>{apiResponseError}</p>
                    </Message>
                )}
                <Form.Field error={!!errors.email} required>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           id="email"
                           name="email"
                           placeholder="example@example.com"
                           value={data.email}
                           onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                <Form.Field error={!!errors.password} required>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           id="password"
                           name="password"
                           placeholder="Make it secure"
                           value={data.password}
                           onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;