import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { setCookie } from "../../lib/sesions";
import { validateCredentials } from "../../lib/validation";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import logo_system from "../../assets/images/usuario-masculino-48.png";
import swal from "sweetalert";
import "./LoginForm.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      error: false,
      msgError: {},
      loading: false,
      form: {
        email: "",
        password: ""
      }
    };
  }

  handleOnClickLogin = async () => {
    this.setState({ loading: true, redirect: false });
    const query = {
      "user.email": this.state.form.email,
      "user.password": this.state.form.password
    };

    const isError = validateCredentials(
      this.state.form.email,
      this.state.form.password
    );

    if (isError) {
      this.setState({ loading: false, redirect: false });
      swal("Oops!", isError, "error");
      return isError;
    }

    try {
      const options = {};
      options.method = "POST";
      options.body = JSON.stringify(query);
      options.headers = new Headers({
        "Content-Type": "application/json; charset=utf-8"
      });

      const response = await fetch(
        "http://localhost:3001/api/v1/user/login",
        options
      );
      const value = await response.json();
      if (value.length > 0) {
        const authUser = JSON.parse(JSON.stringify(value[0]), (k, v) => {
          if (k === "password" || k === "_id") {
            return "";
          }
          return v;
        });
        setCookie("auth-user", { ...authUser, isAuth: true });
        this.setState({ loading: false, redirect: true });
      } else {
        swal("Oops!", "Email o password incorrectos!", "error");
        this.setState({ loading: false, redirect: false });
      }
    } catch (error) {
      swal("Oops!", error.message, "error");
      this.setState({ loading: false, error: true, msgError: { ...error } });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.redirect) {
      return <Redirect push to='/Home' />;
    }
    if (this.state.error) {
      return <Error Error={this.state.error} />;
    }
    return (
      <section className='Login__form'>
        <section className='Login__title'>
          <img className='Login__form--img' alt='login' src={logo_system} />
          <h2 className='Login__form--title'>Inicio de Sesion</h2>
        </section>
        <form className='Login__form--form'>
          <section className='Login__item'>
            <input
              type='text'
              className='Login__item--input'
              placeholder='Email (juan.perez@domain.com)'
              name='email'
              onChange={this.handleChange}
              value={this.state.form.email}
            />
            <input
              type='password'
              className='Login__item--input'
              placeholder='Password'
              name='password'
              onChange={this.handleChange}
              value={this.state.form.password}
            />
          </section>
          <section className='Login__item'>
            <button
              type='button'
              className='Login__button'
              onClick={this.handleOnClickLogin}>
              Iniciar Sesion
            </button>
            <div className='Login__action'>
              <Link to='LoginReset'>¿Olvidaste tu contraseña?</Link>
              <p className='Login__link'>
                ¿No tienen cuenta? <Link to='Register'>Registrate!!</Link>
              </p>
            </div>
          </section>
        </form>
      </section>
    );
  }
}

export default LoginForm;
