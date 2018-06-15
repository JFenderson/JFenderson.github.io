import React, { Component } from 'react';
import * as FaIconPack from 'react-icons/lib/fa';
import style from '../styles/index.scss'



export default class Profile extends Component{
    render(){
        console.log(this.props)
        const resume = this.props.resumeProfile.basics;
        // resume.map((val, ind)=> {
        //     console.log(val);
        //     console.log(ind);
        // })
        return(
            <div className={style.profile}>
                <div>
                    <img src="../images/profilePic.jpg" alt="profile picture"/>
                </div>
                <section>
                    <h1>{resume.name}</h1>
                    <h3>{resume.label}</h3>
                    <ul>
                        <li></li>
                        <li>{resume.phone}</li>
                        <li>{resume.email}</li>
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