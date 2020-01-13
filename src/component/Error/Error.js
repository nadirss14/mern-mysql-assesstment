import React from "react";
import "./Error.scss";
import IconError from "../../assets/images/icon-error-128px.png";

class Error extends React.Component {
  render() {
    return (
      <div className='Error_container'>
        <img src={IconError} alt='Error'></img>
        <h1>Ocurrió un error.</h1>
        <div className='Error__body'>
          <hr />
          <h2>{this.props.Error.name}:</h2>
          <p>{this.props.Error.message}</p>
          <p>{this.props.Stack}</p>
        </div>
      </div>
    );
  }
}

export default Error;
