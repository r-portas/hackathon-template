import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="Header-header">
                  <h1 className="Header-title">Welcome to the Hackathon Template!</h1>
                  <p>Logged in as: {this.props.user.name}</p>
                </header>

                <p>
                  <Link to="/">Home</Link>
                  <Link to="/callback?code=test_code">Login</Link>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(Header);
