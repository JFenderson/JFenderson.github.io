import React, { Component, Fragment } from 'react';
import styles from '../styles/index.scss';

export default class Landing extends Component{
    constructor(){
        super();
    }


    render(){
        return(
            <div className={styles.landing}>
                <p>I'm</p><h1>Joseph Fenderson</h1>
                <span>and this is my page....</span><h2>enjoy</h2>
            </div>
        )
    }
}