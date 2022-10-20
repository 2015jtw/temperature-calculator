import React from "react";
import { BoilingVerdict } from "./boiling-verdict";
import TemperatureInput from "./temperature-input";
import { tryConverter, toCelsius, toFarenheit } from "./conversion-functions";


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'c',
            temperature: ''
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale: 'c',
            temperature
        })
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale: 'f',
            temperature
        })
    }

    render() {

        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConverter(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConverter(temperature, toFarenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />

                <BoilingVerdict celsius={parseFloat(this.state.temperature)} />
            </div>

        )
    }
}

export default Calculator;