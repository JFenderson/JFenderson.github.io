import React, { Component } from 'react';
import style from '../styles/index.scss';

export default class Experience extends Component{
    render(){
        return(
            <div className={style.education} >
                <h2>Education</h2>
                <div >
                    <h4>Innovate Birmingham</h4>
                    <span>Certificate of Completion</span>
                    <span>Full-Stack Web Development</span>
                    <span >January 2018 - April 2018</span>  
                </div>
                <div >
                    <h4>Miles College</h4>
                    <span>Bachelor of Science Degree</span>
                    <span>Business Administration</span>
                    <span >August 2010 - May 2015</span> 
                </div>
                <div >
                    <h4>Robert E. Lee High School</h4>
                    <span>Advanced High School Diploma</span>
                    <span >August 2007 - May 2010</span>   
                </div>
            </div>
        )
    }
}