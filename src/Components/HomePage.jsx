
import React, { Component } from 'react';

import './SignUp.css';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
             suggestions: [],
            funds: [{name:"ICICI",id:"100350"}, {name:"HDFC",id:"100122"}, {name:"TATA",id:"100416"}, {name:"SBI",id:"100717"}, {name:"CANARA",id:"141305"}]
        }
    }
    componentDidMount() {
        fetch("https://api.mfapi.in/mf/100122", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then((response) => response.json())
            .then((data) => {
                console.log('m?', data.meta)
            });
    }
    onHandleChange = (event) => {
        const value = event.target.value;
        console.log('value?', value)
        let suggestions = [];
        let tempArray = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            console.log('suggggg', regex)
            this.state.funds.map((item, index) => {
                tempArray.push(item)
            })
            suggestions = tempArray.sort().filter(v => regex.test(v))
            console.log('sugg', suggestions)
        }
        this.setState(() => ({
            suggestions,
            text: value
        }))

    }
    handlePage = (id) => {
        this.props.history.push({
            pathname: '/details',
            data:id  // your data array of objects
          })
    }

    render() {
        const { funds } = this.state;
        return (
            <div className="container">
                <input type="text" placeholder="Search..." className="input-field" onChange={this.onHandleChange} />
                {
                    funds.map((item, index) => {
                        return (<p key={index} onClick={() => this.handlePage(item.id)}>{item.name}</p>)
                    })
                }
            </div>
        )
    }
}

export default HomePage;