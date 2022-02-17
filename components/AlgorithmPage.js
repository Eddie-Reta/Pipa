import React, { Component, useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import PercSlope from "./PercSlope";

    // console.log(`slope function working`);

    // const regex = /\d/
    // regex.test(max)
    // if (regex.test(max)) {
    //     console.log("ture")
    // } else {
    //     console.log("false")
    // }

const NumInput = () => {
    const [highNum, setHighNum] = useState("");
    const [lowNum, setLowNum] = useState("");
    const [run, setRun] = useState("");

    return (
        <View>
            <Text>High Number: </Text>
                    <TextInput
                    onChangeText={setHighNum}
                    value={highNum}
                    placeholder="ex. 10.5"
                    />
                    <Text>Low Number: </Text>
                    <TextInput
                   onChangeText={setLowNum}
                   value={lowNum}
                   placeholder="ex. 8.5"
                    />
                    <Text>Distance in Feet: </Text>
                    <TextInput
                   onChangeText={setRun}
                   value={run}
                   placeholder="Number of Feet"
                    />
        </View>
    )
};
//const [highNum, setHighNum] = useState(0);
class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     maxNum = 0,
        //     minNum = "",
        //     run = ""
        // }
    }
    render() {      
        //    const [highNum, setHighNum] = useState(0);

        return (
            <SafeAreaView>
                <View>
                    <NumInput />
                    <Button 
                        title="Calculate"
                        onPress={() => {
                            console.log("button pressed")
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default Home;