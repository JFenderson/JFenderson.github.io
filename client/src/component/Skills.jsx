import React, { Component, Fragment } from 'react';
import * as animate from 'react-animations';
import styles from './skills.module.scss';
import * as FaIconPack from 'react-icons/lib/fa';
import * as IoIconPack from 'react-icons/lib/io';
import IconBabel from '-!react-svg-loader!../../utils/devicon-master/icons/babel/babel-original.svg';
import IconHtml from '-!react-svg-loader!../../utils/devicon-master/icons/bootstrap/bootstrap-plain.svg';
// import IconAmazonwebservices from '-!react-svg-loader!../../utils/devicon-master/icons/amazonwebservices/amazonewebservices-original.svg';

export default class Skills extends Component{
    render(){
        return(
            <section id="skills">
            <div>
                <h3>Skills</h3>
                <p>View my skills to see if I'd be a good fit for your project's needs.</p>
            </div>
                <div >
                    <div >
                        <h3>Web</h3>
                        <ul>
                            <li><a href="#"><IconBabel width={100} height={100}/></a></li>
                            <li><a href="#"><IconHtml width={100} height={100}/></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>

                        </ul>
                        <ul>
                            <li>
                                <p>HTML 5</p>
                            </li>
                            <li>
                                <p>CSS 3</p>
                            </li>
                            <li>
                                <p>JavaScript(ES6 and Beyond)</p>
                            </li>
                            <li>
                                <p>React</p>
                            </li>
                            <li>
                                <p>Node.js</p>
                            </li>
                            <li>
                                <p>Express.js</p>
                            </li>
                            <li>
                                <p>Babel</p>
                            </li>
                            <li>
                                <p>Webpack</p>
                            </li>
                            <li>
                                <p>npm</p>
                            </li>
                            <li>
                                <p>SASS</p>
                            </li>
                            <li>
                                <p>Responsive Design</p>
                            </li>
                            <li>
                                <p>Grid</p>
                            </li>
                            <li>
                                <p>Passport.js</p>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h3>Tools</h3>
                        <ul>
                            <li>
                                <p>Visual Studio Code</p>
                            </li>
                            <li>
                                <p>Atom</p>
                            </li>
                            <li>
                                <p>Git</p>
                            </li>
                            <li>
                                <p>GitHub</p>
                            </li>
                            <li>
                                <p>AWS</p>
                            </li>
                            <li>
                                <p>MySQL</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}