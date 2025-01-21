import React from "react";
import Pixel from "./Pixel.jsx";
import "./Canvas.css"

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: this.props.color}
    }

    render() {
        return <div className='Canvas'>
            {this.props.initialState.map((row, i) => (
                <div className="Canvas__row" idx={i}>
                    {row.map((col, j) => {
                        return <Pixel key={`${i}_${j}`} row={i} col={j} color={col}/>
                    })}
                </div>
            ))}
        </div>

    }
}

export default Canvas