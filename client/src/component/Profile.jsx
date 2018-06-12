import React, { Component } from 'react';
import * as FaIconPack from 'react-icons/lib/fa';
import style from '../styles/index.scss'



export default class Profile extends Component{
    render(){
        return(
            <div className={style.profile}>
                <div>
                    <img src="../images/profilePic.jpg" alt="profile picture"/>
                </div>
                <section>
                    <h1>Joseph Fenderson</h1>
                    <ul>
                        <li>Fairfield, Al 35064</li>
                        <li>(205)396-7054</li>
                        <li>fenderson.joseph@gmail.com</li>
                    </ul>
                </section>
                <div className={style.contactIcons}>
                    <a href="#"><FaIconPack.FaFacebook/></a>
                    <a href="#"><FaIconPack.FaGithub/></a>
                    <a href="#"><img src="./images/linkedin_circle.png" alt="linkedin-logo" width='50' height='50' /></a>
                </div>
            </div>
        )
    }
}