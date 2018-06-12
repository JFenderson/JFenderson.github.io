import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, HashRouter } from 'react-router-dom';
import ReactRouter from 'react-router-dom';
import * as FaIconPack from 'react-icons/lib/fa';
import styles from '../styles/index.scss';
import Home from './Home';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import MoreProjects from './MoreProjects';
import Interests from './Interests';
import Landing from './Landing';
import Contact from './Contact';

export default class Navigation extends Component{
    // render(){
    //     return(
    //         <div className={styles}>
    //             <Fragment>
    //                 <div>
    //                 <nav className={styles.navbar}>
    //                     <Link to="/"><a className={styles.link} href="#landing">Home</a></Link>
    //                     <Link to="/"><a className={styles.link} href="#about">Profile</a></Link>
    //                     <Link to="/"><a className={styles.link} href="#schedule"></a></Link>
    //                     <Link to="/"><a className={styles.link} href="#comittee">Committee</a></Link>
    //                     <Link to="/"><a className={styles.link} href="#registration">Register</a></Link>
    //                     <Link to="/"><a className={styles.link} href="#photo-gallery">Photo Gallery</a></Link>
    //                     <Link to="/"><a className={styles.link} href="#footer">Contact</a></Link>
    //                 </nav>
    //                 </div>
    //                 <Landing />
    //                 <Profile />
    //                 <Experience />
    //                 <Projects />
    //                 <Skills />
    //                 <Interests />
    //                 <Contact />
    //             </Fragment>
    //         </div>
    //     )
    // }
    constructor(props){
        super(props);
        this.state = {
            scrollingLock: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        if(window.scrollY > 100){
            this.setState({
                scrollingLock: true
            });
            console.log('moving')
        }else if(window.scrollY < 100){
            this.setState({
                scrollingLock: false
            });
            console.log('not moving')
        }
    }


    render(){
        return(
            <Router>
                <Fragment>
                    <div onScroll={this.handleScroll} className={styles.navbar}>
                        <a href="#"><img src="../images/logo.png"/></a>
                        <Link to='/'><FaIconPack.FaHome/></Link>
                        <Link to='/profile'><FaIconPack.FaUser/></Link>
                        <Link to='/projects'><FaIconPack.FaBriefcase/></Link>
                        <Link to='/skills'><FaIconPack.FaList/></Link>
                        <Link to='/interests-and-goals'><FaIconPack.FaCheckSquareO/></Link>
                        <Link to='/education-and-experience'><FaIconPack.FaGraduationCap/></Link>
                        <Link to='contact'><FaIconPack.FaEnvelope/></Link>
                    </div>
                    <div>
                        <Route path='/' component={ Home } />
                        <Route path='/profile' component={ Profile } />
                        <Route path='/projects' component={ Projects } />
                        <Route path='/moreProjects' component={MoreProjects} />
                        <Route path='/education-and-experience' component={ Experience } />
                        <Route path='/skills' component={ Skills } />
                        <Route path='/interests-and-goals' component={ Interests } />
                        <Route path='/contact' component={ Contact } />                        

                    </div>
                    
                </Fragment>
            </Router>
        )
    }
}