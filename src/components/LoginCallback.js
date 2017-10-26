import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthCode, fetchUser } from "../actions";
import auth from "../util/auth";

class LoginCallback extends Component {
  constructor(props) {
    super(props);

    this.code = "";

    if (props && props.location && props.location.search) {
      this.code = auth.getCodeFromQueryString(props.location.search);
      props.dispatch(setAuthCode(this.code));
      props.dispatch(fetchUser());
    }
  }

  render() {
    return (
      <div>
        <h2>Login callback</h2>
        <p>Auth code: {this.code}</p>
      </div>
    )
  }
}

export default connect()(LoginCallback);
