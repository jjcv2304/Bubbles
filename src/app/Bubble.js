import React from "react";
import {Draggable} from "./Draggable";

export default class Bubble extends React.Component {
    state = {
        x: 0,
        y: 0,
    };

    _move = (x, y) => this.setState({x, y});

    /* grid logic
    _move = (x, y) => this.setState({
        x: ~~((x - 5) / 10) * 10 + 5,
        y: ~~((y - 5) / 10) * 10 + 5,
    });
    */

    render() {
        const {x, y} = this.state;
        function GetCaloriesColor(calories) {
            if (calories > 600 && calories < 700) {
                return "orange";
            } else if (calories > 700) {
                return 'red';
            } else {
                return '#8bee88';
            }
        }
        const style = {
            width: `${this.props.calories * 0.75}px`,
            height: `${this.props.calories * 0.75}px`,
            backgroundColor: GetCaloriesColor(this.props.calories)
        };
        const minimumSizeForExtendedProperties = 400;

        return (
            <Draggable x={x} y={y} onMove={this._move}>
                <div className="bubble" style={style}>
                    <div className="bubble-content">
                        <div className="bubble-title"> {this.props.name} </div>
                        <div className="bubble-calories"> {this.props.calories} </div>
                        {parseInt(this.props.calories) > minimumSizeForExtendedProperties && (
                            <div className="bubble-macronutrients">
                                <div className="bubble-macronutrients-item">P:{this.props.macro_p}%</div>
                                <div className="bubble-macronutrients-item">H:{this.props.macro_h}%</div>
                                <div className="bubble-macronutrients-item">F:{this.props.macro_f}%</div>
                            </div>
                        )}
                    </div>
                </div>
            </Draggable>
        );
    }
}
