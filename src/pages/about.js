import React, { Component } from 'react';
import me from '../images/profile-me.jpg';
import './about.css';

export default class About extends Component {
    render() {
        return(
            <div className="col-xs-12 col-xl-8 offset-xl-2">
                <div className="pagebox pt-4 pb-4 shadow-lg">
                    <div className="row justify-content-center col-12 text-white pr-0 pl-0 ml-0 mr-0">
                        <div className="col-12 col-md-10 col-lg-6 pt-3 pl-0 pr-0">
                            <div className="row justify-content-center">
                                <div className="pb-3">
                                    <img src={me} className="biopicture" alt="bio-pic" />
                                </div>

                                <div className="pl-3">
                                    <h3 className="textyellow textspaced"><u>Player Info</u></h3>
                                    <ul className="no-bullets raleway pl-0">
                                        <li><b>Name:</b> Muhammad Zourdy</li>
                                        <li><b>Location:</b> Jakarta, ID</li>
                                        <li><b>Occupation:</b> Software Developer</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="raleway text-center col-xs-12 col-xl-10 offset-xl-1 pt-2 pl-1 pr-1">
                                Mohammed Zourdy is a Self Taught Full Stack Web and Mobile Developer who is also certified in Certified Ethical Hacker.
                                He is well versed in React, Vue, React Native, Python, JavaScript, Django, Firebase, and traditional web languages such as CSS and HTML. <br /><br />
                                Having embraced development at a rapid pace, he has built numerous progressive web prototypes and helping small local business through Website Development.
                                Having a Big dream to help human civilization in the future through Artificial Intelligence.
                            </p>
                        </div>


                        <div className="col-12 col-md-10 col-lg-6 pt-3 pl-2 pr-2">
                            <h3 className="textblue textspaced"><u>Player Brief</u></h3>
                            <ul className="raleway pb-2">
                                <li className="brief-item">Game Changer.</li>
                                <li className="brief-item">Problem Solver.</li>           
                                <li className="brief-item">Self-motivated.</li>      
                                <li className="brief-item">Excellent Team Work.</li> 
                                <li className="brief-item">Great communication skills.</li>     
                                <li className="brief-item">Critical Thinker</li>           
                                <li className="brief-item">Creative Mindset</li>           
                                <li className="brief-item">Great Leadership</li>           
                                <li className="brief-item">Experienced in IT, and organization.</li>           
                            </ul>
                            <div className="row pr-0 ml-0 pt-2">
                                <h4 className="textpink textspaced pr-2">Power Ups: </h4>
                                <h5 className="text-white raleway smallheader pt-1">Coffee, Meditatation and Reading</h5>
                            </div>
                            <div className="row pr-0 ml-0 pt-2">
                                <h4 className="textpink textspaced pr-2">Skills: </h4>
                                <h5 className="text-white raleway smallheader pt-1">Coding, Music, Brazilian Jiujitsu and Chess</h5>
                            </div> 
                        </div>                        
                    </div>

                    
                    
                </div>
            </div>
        )
    }
}