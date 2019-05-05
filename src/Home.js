import React, {Component} from 'react';
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
                    <h3>Our Mission Statement</h3>
                    <p>Vizinate aims to provide a sense of security regarding where your donations go.
                        It shows that you truly do make a difference in helping people get on their feet to 
                        achieve great things in life. Transparency and visibility motivate users like you to
                         continuously make their mark in society. You enable people to become self-sufficient and
                          help create a better future for others. We provide the platform, you provide the hope. 
                    </p>
                    <h3>Impact</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit vel dui eget pharetra.
                        Pellentesque lacinia euismod nisl, eget gravida felis pulvinar eu. Aenean eget magna ut urna
                        fermentum sodales eu nec mauris. Vestibulum molestie venenatis tortor, eu lobortis nulla sodales
                        id.
                        In vestibulum facilisis velit sit amet maximus. Nam justo est, accumsan eget libero non, commodo
                        cursus metus. Nunc quis consectetur ex. Maecenas nisl urna, aliquam eu sodales quis, ornare in
                        quam.
                        Donec sagittis ac lorem quis ornare. Proin feugiat justo auctor elit auctor vehicula. Ut
                        convallis
                        tincidunt pretium. Curabitur sit amet justo a magna vulputate vestibulum id nec quam. Nunc
                        hendrerit
                        luctus diam, nec mattis nibh congue sit amet. Aenean ac purus eget sem consequat accumsan. Nam
                        condimentum sapien ac tincidunt convallis. In congue posuere rutrum.</p>
                </div>
                <div id="button_container">
                    <div id="donate">
                        <h2>Want to donate?</h2>
                        <button>Create an account</button>
                    </div>
                    <div id="sign_up">
                        <h2>Looking for help?</h2>
                        <button>Find out how</button>
                    </div>
                    <div id="login_home">
                        <h2>Have an account?</h2>
                        <button>Log in</button>
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
}
