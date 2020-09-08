import React, { Component } from 'react';

import './SignUp.css';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fundDetials: []
        }
    }
    componentDidMount() {
        fetch(`https://api.mfapi.in/mf/${this.props.location.data}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    fundDetials: data.meta
                })
            });
    }

    render() {
        const { fundDetials } = this.state;
        console.log('?', fundDetials.fund_house)
        return (
            <div>
                <h1>Mutual Fund Details</h1>
                <div className="container">
                    <p>Fund House : {fundDetials.fund_house}</p>
                    <p>Scheme Category : {fundDetials.scheme_category}</p>
                    <p>Scheme Code : {fundDetials.scheme_code}</p>
                    <p>Scheme Name : {fundDetials.scheme_name}</p>
                    <p>Scheme Type : {fundDetials.scheme_type}</p>
                </div>
            </div>
        )
    }
}

export default SignUp;