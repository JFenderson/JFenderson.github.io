import React, { Component, Fragment } from 'react';


export default class ContactForm extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){

    }

    render(){
        return(
            <div>
                <h3 >Like what you saw? Send me an email and or connect via social media!</h3>
                <div onSubmit={ this.handleSubmit }>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={ this.state.name } onChange={ this.handleChange } required />
                
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={ this.state.email } onChange={ this.handleChange } required />
                
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="3" value={ this.state.message } onChange={ this.handleChange } required ></textarea>
                
                    <button onClick={ this.handleSubmit }>Submit</button>
                </div>
            </div>
        )
    }
}