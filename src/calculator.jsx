import React from "react";
import { BoilingVerdict } from "./boiling-verdict";
import TemperatureInput from "./temperature-input";


class Calculator extends React.Component {

    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>

        )
    }
}

export default Calculator;