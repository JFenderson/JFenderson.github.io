import React, { Component, Fragment } from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Interests from './/Interests';
import Education from './Education';
import Volunteer from './Volunteer';
import styles from '../styles/index.scss';

 const App = (props)=> {
    
        // const props = this.props;
        const profileData = props.resume.basics;
        const workData = props.resume.work;
        const educationData = props.resume.education;
        const skillsData = props.resume.skills;
        const projectData = props.resume.projects;
        const interestData = props.resume.interests;
        const volunteerData = props.resume.volunteer;
        return(
            <div className="mainContainer">
                <Profile profileData={profileData}/>
                <Projects projectData={projectData} />
                {/* <Volunteer volunteer={volunteerData} /> */}
                <Skills skillsData={skillsData}/>
                <Education educationData={educationData} />
            </div>
        )
}

export default App;