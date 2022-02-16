import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import PercSlope from "./PercSlope";

    // console.log(`slope function working`);

    // const regex = /\d/
    // regex.test(max)
    // if (regex.test(max)) {
    //     console.log("ture")
    // } else {
    //     console.log("false")
    // }
        
    


class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                {PercSlope(1444.96, 1431.9, 135)}
            </View>
        )
    }
}

export default Home;