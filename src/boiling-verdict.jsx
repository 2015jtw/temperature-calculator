import React from "react";


export function BoilingVerdict(props) {

    if (props.celsius >= 100) {
        return <p>water is boiling</p>
    }
    else {
        return <p>water is not boiling</p>
    }
}