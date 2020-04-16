import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    /* bind here */
    }
    
    render() {
        return (
            <div>
                <h1>Simple Counter</h1>
                <p>{this.state.count}</p>
            </div>
        );
    }

}

export default Counter;

