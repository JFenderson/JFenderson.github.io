import React, { Component, Fragment } from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Interests from './/Interests';
import Contact from './Contact';
import * as data from './resume.json'

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }


    componentDidMount(){
        fetch("./resume.json")
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            data: json
          });
        });

    }

    render(){
        console.log(data)
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