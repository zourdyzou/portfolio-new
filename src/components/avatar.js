import React, { Component } from 'react';
import './avatar.css';
import avatar from '../images/profile-ig.png';


export default class Avatar extends Component {
    render() {
        return(
            <div className="avatar-container">
                <div className="row justify-content-center mt-0">
                    <img src={avatar} className="avatar" alt="avatar" />
                </div>
                <div className="socialicons d-flex justify-content-center justify-content-around pt-2">
                    <a href="https://github.com/zourdycodes" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-github"></span></a>
                    <a href="mailto:zhafarmuhammad12@gmail.com" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-mail_outline"></span></a>
                    <a href="https://www.twitter.com/zourdythedev/" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-twitter"></span></a>
                    <a href="https://www.linkedin.com/in/muhammad-zourdy-2008981b2/" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-linkedin"></span></a>
                    {/* <a href="https://www.instagram.com/zourdythedev/" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-instagram"></span></a> */}
                </div>
            </div>
        )
    }
}