import React, { Component } from 'react';
import qrcode from './image/QRCode.png';
import "./css/Recipient.css";

export default class Recipient extends Component {
    render() {
        return (
            <div id="recipient">
                <div id ="recipient_title">
                    <h1>Welcome user_recipient</h1>
                </div>
                <div id="recipient_content">
                    <h2>Amount left: $50.00</h2>

                    <div id="scan">
                        <img src={qrcode} alt="QRcode" id="qr_img"/>
                    </div>
                </div>
            </div>
        );
    }
}
