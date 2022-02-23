import React from "react";
import { Text , ScrollView, View} from "react-native";

// Slope Percentage

const PercSlope = (max, min, run) => {
    
    const rise = max - min;
    const diff = rise / run;
    const percentage = 100 * diff;
    console.log(percentage);

    const percStr = percentage.toString().split(".");
    console.log(percStr)
    const newNum = percStr[0].concat("." + percStr[1].slice(0, 3));
    const newPercent = parseFloat(newNum);

    return newPercent;

};

export default PercSlope;