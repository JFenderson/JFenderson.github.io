import React, { Component } from 'react';
import * as FaIconPack from 'react-icons/lib/fa';



 const ProfileImage = (props) => {
 const profileObj = props.profileData;

    return(
        <div className="profile-image">
            <div className="profile-image___image">
                <img src={profileObj.picture} alt="profile picture"/>
            </div>
        </div>
    )
}

export default ProfileImage;