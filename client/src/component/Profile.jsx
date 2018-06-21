import React, { Component } from 'react';
import * as FaIconPack from 'react-icons/lib/fa';



 const Profile = (props) => {
 const profileObj = props.profileData;
 const getSocialLinks = props.profileData.profiles.map(function(item, index) {
    return (
       <li className="social-list__item" key={index}><a href={item.url} target="_blank">{item.network}</a></li>
    )
 });

    return(
        <div className="profile-box">
            <div className="profile-box___image">
                <img src={profileObj.picture} alt="profile picture"/>
            </div>
            <section>
                <h1>{profileObj.name}</h1>
                <h3>{profileObj.label}</h3>
                <ul>
                   <li>{profileObj.location}</li>
                    <li>{profileObj.phone}</li>
                    <li>{profileObj.email}</li>
                </ul>
            <ul>
                {getSocialLinks}
            </ul>
                    
            </section>
        </div>
    )
}

export default Profile;