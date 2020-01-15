import React from "react";
import LoginForm from "../../component/LoginForm/LoginForm";
import "./Login.scss";

class Login extends React.Component {
  render() {
    return (
      <section className='Login__container'>
        <LoginForm></LoginForm>
      </section>
    );
  }
}

export default Login;
