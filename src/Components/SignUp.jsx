import React, { Component } from 'react';

import './SignUp.css';
class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                name: '',
                email: "",
                password: "",
                gender: "",
                dob: ""
            }
        }
    }
    handleName = (e) => {
        const { data } = this.state
        console.log(e.target.value)
        data['name'] = e.target.value
        this.setState({
            data
        })
    }
    handleEmail = (e) => {
        const { data } = this.state
        console.log(e.target.value)
        data['email'] = e.target.value
        this.setState({
            data
        })
    }
    handlePassword = (e) => {
        const { data } = this.state
        console.log(e.target.value)
        data['password'] = e.target.value
        this.setState({
            data
        })
    }
    handleDate = (e) => {
        const { data } = this.state
        console.log(e.target.value)
        data['dob'] = e.target.value
        this.setState({
            data
        })
    }
    handleGender = (e) => {
        const { data } = this.state
        console.log(e.target.name)
        data['gender'] = e.target.name
        this.setState({
            data
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.data)
        const {data}= this.state;
        if(data.email!=="" && data.name!=="" && data.password!=="" && data.dob!=="" && data.gender!==""){
            this.props.history.push('/home')
            localStorage.setItem('user_email_id', data.email)
            localStorage.setItem('user_password', data.password)
        }
        else{
            console.log("not there")
        }

    }


    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <h1>Sign up Page</h1>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={this.handleName}></input>
                </div>
                <div className="input-container">
                    <label>Email</label>
                    <input type="email" onChange={this.handleEmail} ></input>
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" onChange={this.handlePassword}></input>
                </div>
                <div className="input-container">
                    <label>Gender</label>
                    <input type="checkbox" name="F" onChange={this.handleGender}></input>
                    <span>F</span>
                    <input type="checkbox" name="M" onChange={this.handleGender}></input>
                    <span>M</span>
                </div>
                <div className="input-container">
                    <label>Date of Birth</label>
                    <input type="date" onChange={this.handleDate}></input>
                </div>
                <button onSubmit={this.handleSubmit}>Sign Up</button>
            </form>
        )
    }
}

export default SignUp;