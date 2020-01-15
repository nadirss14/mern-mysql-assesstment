import React from "react";
import { getCookie, removeCookie } from "../../lib/sesions";
import { Redirect } from "react-router";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import image from "../../assets/images/presentación-64.png";
import "./Navbar.scss";
class Navbar extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      error: false,
      msgError: {},
      loading: false,
      authUser: {}
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    const authUser = JSON.parse(getCookie("auth-user"), (k, v) => v);
    if (authUser) {
      this.setState({
        authUser: authUser,
        loading: false
      });
    }
  }

  handleLogout = () => {
    this.setState({ loading: true, redirect: false });
    if (removeCookie("auth-user")) {
      this.setState({ loading: false, redirect: true });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.redirect) {
      return <Redirect push to='/' />;
    }
    if (this.state.error) {
      return <Error Error={this.state.error} />;
    }
    return (
      <header>
        <nav className={this.props.styles}>
          <div className='Header__menu'>
            <a href='/' alt='logo'>
              {<img src={image} alt='logo'></img>}
            </a>
            <ul>
              <li className='underline-green'>
                <a href='Home'>Dashboard</a>
              </li>
            </ul>
          </div>
          {this.state.authUser.isAuth ? (
            <div className='Header__search'>
              <h4>
                {`${this.state.authUser.user.firstName} ${this.state.authUser.user.lastName}`}{" "}
              </h4>
              <ul>
                <li className='underline-red'>
                  <button
                    className='Header__search--button'
                    type='button'
                    onClick={this.handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          ;
        </nav>
      </header>
    );
  }
}

export default Navbar;
