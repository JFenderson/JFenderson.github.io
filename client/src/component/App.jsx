import React, { Component, Fragment } from 'react';
import Profile from './Profile';
import Skills from './Skills';
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
                <Projects projectData={projectData} />
                {/* <Volunteer volunteer={volunteerData} /> */}
                <Work workData={workData} />
                <Internship internshipData={internshipData} />
                <Skills skillsData={skillsData}/>
                <Education educationData={educationData} />
            </div>
        )
}

export default App;