import React from "react";
import { Text } from "react-native";

    const ValidateInput = (num) => {
        const onlyNum = /^\d*(\.\d{1,2})$/;
        const singleNum = /^\d*$/;
      
        if (num === null || num === undefined || num === "") {
            console.log(null);
        } else if (onlyNum.test(num) || singleNum.test(num)) {
            return true
        } else {
                    console.log("Not a Num.")
        };
    }
    export default ValidateInput;