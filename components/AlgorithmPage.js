import React, { Component, useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Switch, Keyboard } from "react-native";
import PercSlope from "./PercSlope";

    // console.log(`slope function working`);

    // const regex = /\d/
    // regex.test(max)
    // if (regex.test(max)) {
    //     console.log("ture")
    // } else {r
    //     console.log("false")
    // }

const NumInput = () => {
    const [highNum, setHighNum] = useState("");
    const [lowNum, setLowNum] = useState("");
    const [run, setRun] = useState("");
    const [viewPerc, toggleState] = useState(false);
    const toggleSwitch = () => toggleState(previousState => !previousState);

    ViewPercentage(viewPerc)

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
                      <Button 
                        title="Calculate"
                        onPress={Keyboard.dismiss}
                        color = "#007AFF"
                    />
                    {viewPerc ? <ViewPercentage percentage={PercSlope(highNum, lowNum, run)} /> : null}
                    
        </View>
    )
};

const ViewPercentage = (props) => {   
            return (
        <View>
            <Text>{props.percentage}%</Text>
        </View>
    )
};

//const [highNum, setHighNum] = useState(0);
class Home extends Component {
    render() {      
        return (
            
                <View>
                    <NumInput />
                </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "grey",
        flex: 1,
        justifyContent: "center"
    }
})