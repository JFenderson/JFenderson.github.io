import React, { Component, Fragment } from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Interests from './/Interests';
import Education from './Education';
import Volunteer from './Volunteer';
import styles from '../styles/index.scss';
// import * as resume from './resume.json'

 const Home = (props)=> {
    
        // const props = this.props;
        const profileData = props.resume.basics;
        const workData = props.resume.work;
        const educationData = props.resume.education;
        const skillsData = props.resume.skills;
        const projectData = props.resume.projects;
        const interestData = props.resume.interests;
        const volunteerData = props.resume.volunteer;
        console.log('profile data',profileData)
        console.log('work data', workData);
        console.log('education', educationData)
        console.log('this is the project data',projectData)
        return(
            <div className={styles.mainContainer}>
                <Profile profileData={profileData}/>
                <Projects projectData={projectData} />
                <Experience workData={workData} />
                {/* <Volunteer volunteer={volunteerData} /> */}
                <Skills skillsData={skillsData}/>
                <Education educationData={educationData} />
            </div>
        )
}

export default Home;