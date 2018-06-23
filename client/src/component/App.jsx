import React, { Component, Fragment } from 'react';
import Profile from './Profile';
import ProfileImage from './ProfileImage';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Work from './Work';
import Internship from './Internship';
import Education from './Education';
import Volunteer from './Volunteer';


 const App = (props)=> {
        // const props = this.props;
        const profileData = props.resume.basics;
        const workData = props.resume.work;
        const internshipData = props.resume.internship;
        const educationData = props.resume.education;
        const skillsData = props.resume.skills;
        const projectData = props.resume.projects;
        const volunteerData = props.resume.volunteer;
        return(
            <div className="mainContainer">
                <Profile profileData={profileData}/>
                {/* <ProfileImage profileData={profileData} /> */}
                <About />
                {/* <Projects projectData={projectData} /> */}
                <Work workData={workData} />
                <Internship internshipData={internshipData} />
                <Volunteer volunteer={volunteerData} />
                <Education educationData={educationData} />
                <Skills skillsData={skillsData}/>
            </div>
        )
}

export default App;