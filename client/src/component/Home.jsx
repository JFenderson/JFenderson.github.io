import React, { Component, Fragment } from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Interests from './/Interests';
import Contact from './Contact';

export default class Home extends Component{
    render(){
        return(
            <Fragment>       
                <Profile />
                <Projects />
                <Experience />
                <Skills />
                <Interests />
                <Contact />
            </Fragment>
        )
    }
}