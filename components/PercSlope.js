import React from "react";
import { Text , ScrollView, View} from "react-native";
import { ValidateDot } from "./InputValidation";

// Slope Percentage

const PercSlope = (max, min, run) => {
   
    if (max === null || min === "" || run === "") {
        return ( 
        <Text>Please Enter Digits Only!</Text>
        )
    } else {
    const rise = max - min;
    const diff = rise / run;
    const percentage = 100 * diff;
    if (ValidateDot(percentage)) {
        const percStr = percentage.toString().split(".");
        const newNum = percStr[0].concat("." + percStr[1].slice(0, 3));
        const newPercent = parseFloat(newNum);
    return newPercent;
    } else {
        const wholeNum = percentage + ".00";
        const numEdit = wholeNum.toString().split(".");
        const newNum = numEdit[0].concat("." + numEdit[1].slice(0, 3));
        const newPercent = parseFloat(newNum);
        return newPercent;

    }
    }
};

export default PercSlope;