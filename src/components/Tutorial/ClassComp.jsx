import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class ClassComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            numperType: ""
        }
    }

    // Change the color
    tellNumIsOddOrEven = ()=>{
        if (this.state.number % 2 === 0) {
            this.setState({ numperType: "Even" })
        } else {
            this.setState({ numperType: "Odd" })
        }
    }

    handleValueChange = (e)=>{this.setState({number:e.target.value})}

    render() {
        return (
            <div>
                <h4>Class based component</h4>
                <input 
                type="number" 
                placeholder='Please enter number' 
                value={this.state.number}
                onChange={this.handleValueChange}
                
                />
                <div style={{padding: '10px', borderRadius: "10px" }}>Number is: {this.state.numperType}</div>
                <Button variant="warning" onClick={this.tellNumIsOddOrEven}>Answer me</Button>
            </div>
        )
    }
}
