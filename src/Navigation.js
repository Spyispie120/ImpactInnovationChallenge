import React, { Component } from 'react';
import qrcode from './image/QRCode.png';
import "./css/Navigation.css";
import {Link} from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div id="navigation">
              <div id="nav_wrapper">
                <nav>
                  <Link to="/homd" id="logo">Vizinate</Link>
                  <Link to="/home">Home</Link>
                  <Link to="/home">Resources</Link>
                  <Link to="/home">Contact</Link>
                  <Link to="/login" id="login">Login</Link>
                </nav>
              </div>
            </div>
        );
    }
}
