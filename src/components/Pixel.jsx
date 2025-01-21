import React from "react";
import "./Pixel.css";
import updater from "../services/UpdateService.js";

export default class Pixel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: this.props.color}
    }

    componentDidMount() {
        updater.subscribe(this, (pixel) => {
            if (this.props.row === pixel.row && this.props.col === pixel.col) {
                this.setState({color: pixel.color})
            }
        })
    }

    componentWillUnmount() {
        updater.unsubscribe(this)
    }

    render() {
        return <div
            className="Canvas__pixel"
            style={{backgroundColor: this.state.color}}
            idx={this.props.col}
            // onClick={() => {this.setState({color: 'white'})}}
        ></div>
    }
}