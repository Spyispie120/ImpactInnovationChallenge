import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';
import GroupHug from "./image/grouphug.png";

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <div id="wrapper">
                <div id="header">
                    <div>
                        <img src={GroupHug} alt="grouphug" id="group_hug"/>
                    </div>
                    <div>
                        <h1 id="title"><i>Vizinate</i></h1>
                        <h2> Improving visibility of charitable donations and creating donor appreciation.</h2>
                    </div>

                </div>
                <div id="mission_statement">
                    <h3>Problem Statement</h3>
                    <p>Other donation platforms fail to provide the visibility of your funding. 
                        We are here to foster a direct link between you and the less fortunate.
                         This platform gives you the opportunity to choose what areas you feel are important 
                         and track your contributions over time. 
                    </p>
                    <h3>Our Mission Statement</h3>
                    <p>Vizinate aims to provide a sense of security regarding where your donations go.
                        It shows that you truly do make a difference in helping people get on their feet to 
                        achieve great things in life. Transparency and visibility motivate users like you to
                         continuously make their mark in society. You enable people to become self-sufficient and
                          help create a better future for others. We provide the platform, you provide the hope. 
                    </p>
                </div>
                <div id="button_container">
                    <div id="donate">
                        <h2>Want to donate?</h2>
                        <Link to="/home"><button>Sign Up</button></Link>
                    </div>
                    <div id="sign_up">
                        <h2>Looking for help?</h2>
                        <Link to="/home"><button>Find out how</button></Link>
                    </div>
                    <div id="login_home">
                        <h2>Have an account?</h2>
                        <Link to="/login"><button>Log in</button></Link>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}
