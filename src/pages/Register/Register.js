import React from "react";
import RegisterForm from "../../component/RegisterForm/RegisterForm";
import "./Register.scss";

class Register extends React.Component {
  render() {
    return (
      <section className='Login__container'>
        <RegisterForm></RegisterForm>
      </section>
    );
  }
}

export default Register;
