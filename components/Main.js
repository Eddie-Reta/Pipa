import React, { Component } from "react";
import {View, Text} from "react-native";
import Algorithm from "./AlgorithmPage";

class Main extends Component {
    render() {
        return (
            <View style={{backgroundColor: "blue"}}>
                <Algorithm />
            </View>
        )
    }
};

export default Main;