import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../button';
import Input from '../input';

import { login } from '../../store/actions';

import './login-form.scss';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailIsValid: true,
      passwordIsValid: true,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });

    if (name === 'email') {
      if (validateEmail(value)) {
        this.setState({
          emailIsValid: true,
        });
      } else {
        this.setState({
          emailIsValid: false,
        });
      }
    } else {
      if (value.length >= 8) {
        this.setState({
          passwordIsValid: true,
        });
      } else {
        this.setState({
          passwordIsValid: false,
        });
      }
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { logIn } = this.props;
    const user = {
      email,
      password,
    };

    if (validateEmail(email)) {
      this.setState({
        emailIsValid: true,
      });
    } else {
      this.setState({
        emailIsValid: false,
      });
    }

    if (password.length >= 8) {
      this.setState({
        passwordIsValid: true,
      });
    } else {
      this.setState({
        passwordIsValid: false,
      });
    }

    if (validateEmail(email) && password.length >= 8) {
      logIn(user);
    }
  };

  render() {
    const { className } = this.props;
    const { email, password, emailIsValid, passwordIsValid } = this.state;

    return (
      <form className={`form ${className}`} onSubmit={this.handleSubmit}>
        <h3 className="form__title">Simple Flight Check</h3>
        <label className={`form__label ${emailIsValid ? '' : 'is-invalid'}`}>
          Логин:
          <Input
            type="text"
            className="form__input"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          {!emailIsValid && (
            <span className="invalid-feedback">
              Пожалуйста, вводите правильный емаил
            </span>
          )}
        </label>

        <label className={`form__label ${passwordIsValid ? '' : 'is-invalid'}`}>
          Пароль:
          <Input
            type="password"
            className="form__input"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          {!passwordIsValid && (
            <span className="invalid-feedback">
              Пожалуйста, вводите правильный парол
            </span>
          )}
        </label>

        <Button type="submit" className="btn--blue form__button" text="Войти" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (user) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
