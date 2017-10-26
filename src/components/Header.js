import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="Header-header">
                  <h1 className="Header-title">Welcome to the Hackathon Template!</h1>
                </header>
            </div>
        )
    }
}
