import React, { Component } from "react";
import auth from "../util/auth";

export default class LoginCallback extends Component {
  constructor(props) {
    super(props);

    this.code = "";

    if (props && props.location && props.location.search) {
      this.code = auth.getCodeFromQueryString(props.location.search);
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
