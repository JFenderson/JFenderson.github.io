import React, { Component, Fragment } from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Interests from './/Interests';
import Contact from './Contact';
import * as resumeData from './resume.json'

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            data:resumeData
        }
    }


    render(){
        // const resume = data.map((value, index)=> {
        //     console.log('this is the value', value);
        //     console.log('this is the index', index);
        // })
        return(
            <Fragment> 
                <Profile resumeProfile={this.state.data}/>
                <Projects />
                <Experience />
                <Skills />
                <Interests />
                <Contact />
            </Fragment>
        )
    }
}