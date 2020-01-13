import React from "react";
// import image from "../../assets/images/n-50.png";
//import Search from "../SearchBar/Search";
import "./Navbar.scss";
class Navbar extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <nav className={this.props.styles}>
          <div className='Header__menu'>
            <a href='/' alt='logo'>
              {/* <img src={image} alt='logo'></img> */}
            </a>
            <ul>
              <li className='underline-red'>
                <a href='Home'>Dashboard</a>
              </li>
              {/* <li className='underline-green'>
                <a href='Login'>Login</a>
              </li>
              <li className='underline-blue'>
                <a href='/'>Logout</a>
              </li> */}
              <li className='underline-yellow'>
                <a href='/'>Logout</a>
              </li>
            </ul>
          </div>
          <div className='Header__search'>
            {/* <Search styles='Search__light'></Search> */}
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
