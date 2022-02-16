import React from "react";
import { Text } from "react-native";

// Slope Percentage

const PercSlope = (max, min, run) => {
    
    const rise = max - min;
    const diff = rise / run;
    const percentage = 100 * diff;

    const percStr = percentage.toString().split(".");
    const newNum = percStr[0].concat("." + percStr[1].slice(0, 3));
    const newPercent = parseFloat(newNum);

    return (
        <Text>{newPercent}</Text>
    )
};

export default PercSlope;