import React from "react";
import { BoilingVerdict } from "./boiling-verdict";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}


class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;

        return (
            <form>
                <label>Enter Temperature in {scaleNames[scale]}: </label>
                <input
                    onChange={this.handleChange}
                    value={this.state.temperature}
                />

                <BoilingVerdict celsius={parseFloat(this.state.temperature)} />

            </form>
        )
    }
}

export default TemperatureInput;