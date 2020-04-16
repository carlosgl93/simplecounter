import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div>
                <h1>Simple Counter</h1>
                <p>{this.props.horas + " horas" + " " + this.props.minutos + " minutos" + " " + this.props.segundos + " segundos"}</p>
                
    
            </div>

        );
    }

}

export default Counter;

