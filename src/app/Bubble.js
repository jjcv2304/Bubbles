import React from "react";
import {Draggable} from "./Draggable";

export default class Bubble extends React.Component {
    state = {
        x: 0,
        y: 0,
    };

    _move = (x, y) => this.setState({x, y});

    // you can implement grid snapping logic or whatever here
    /*
    _move = (x, y) => this.setState({
        x: ~~((x - 5) / 10) * 10 + 5,
        y: ~~((y - 5) / 10) * 10 + 5,
    });
    */

    render() {
        const {x, y} = this.state;

        const style = {
            width: `${this.props.calories}px`,
            height: `${this.props.calories}px`,
        };

        return (
            <Draggable x={x} y={y} onMove={this._move}>
                <div className="bubble" style={style} >
                    <p className="text"> {this.props.name} </p>
                </div>
            </Draggable>
        );
    }
}
