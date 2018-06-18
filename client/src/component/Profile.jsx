import React, { Component } from 'react';
import * as FaIconPack from 'react-icons/lib/fa';
import style from '../styles/index.scss'



 const Profile = (props) => {
 const profileObj = props.profileData;
 const getSocialLinks = props.profileData.profiles.map(function(item, index) {
    return (
       <li className="social-list__item" key={index}><a href={item.url} target="_blank">{item.network}</a></li>
    )
 });

    return(
        <div className={style.profile}>
            <div>
                <img src={profileObj.picture} alt="profile picture"/>
            </div>
            <section>
                <h1>{profileObj.name}</h1>
                <h3>{profileObj.label}</h3>
                <div>
                    <span>{profileObj.location}</span>
                    <span>{profileObj.phone}</span>
                    <span>{profileObj.email}</span>
                </div>
            </section>
            <ul>
                {getSocialLinks}
            </ul>
        </div>
    )
}

export default Profile;