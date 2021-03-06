import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="Header-header">
                  <h1 className="Header-title">Welcome to the Hackathon Template!</h1>

                  <div className="Header-row">
                    <p>Logged in as: {this.props.user.name}</p>

                    <ul className="Header-nav">
                      <li>
                        <NavLink exact to="/" activeClassName="Header-selected">Home</NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/user" activeClassName="Header-selected">User</NavLink>
                      </li>
                      <li>
                        <NavLink to="/callback?code=test_code" activeClassName="Header-selected">Login (test)</NavLink>
                      </li>
                    </ul>
                  </div>
                </header>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
};

// `pure: false` tells react not to treat it as a pure function
export default connect(mapStateToProps, null, null, { pure: false })(Header);
