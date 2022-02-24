import React, { Component, useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Switch, Keyboard } from "react-native";
import PercSlope from "./PercSlope";
import ValidateInput from "./InputValidation";

const NumInput = (props) => {
    const [highNum, setHighNum] = useState("");
    const [lowNum, setLowNum] = useState("");
    const [run, setRun] = useState("");
    const [activeInputColor, setInputColor] = useState(null);
    const [activeInput, toggleInputState] =  useState(true);
    const [viewPerc, toggleState] = useState(false);
    const toggleSwitch = () => toggleState(previousState => !previousState);
    const toggleInputColor = () => toggleInputState(previousState => !previousState);

    ViewPercentage(viewPerc)

    return (
            <View style={styles.container}>
            <Text>High Number: </Text>
                    <TextInput
                    onChangeText={setHighNum}
                    value={highNum}
                    placeholder="ex. 10.5"
                    style={[styles.input,
                        
                        {borderColor: activeInputColor}]
                    }
                    keyboardType="decimal-pad"
                    onFocus={() => {
                        activeInput ? setInputColor("#37FB1B") : setInputColor("black");
                    }}
                    onBlur={() => {
                        toggleInputColor()
                    }}
                    textAlign="center"
                    />

                    <Text>Low Number: </Text>
                    <TextInput
                   onChangeText={setLowNum}
                   value={lowNum}
                   placeholder="ex. 8.5"
                   style={styles.input}
                   keyboardType="decimal-pad"
                    />
                    <Text>Distance in Feet: </Text>
                    <TextInput
                   onChangeText={setRun}
                   value={run}
                   placeholder="Number of Feet"
                   style={styles.input}
                   keyboardType="decimal-pad"
                    />
                      <Button 
                        title="Calculate"
                        onPress={() => {
                           if(ValidateInput(highNum) && ValidateInput(lowNum) && ValidateInput(run)) {
                               toggleSwitch();
                           }
                            
                        }}
                        color = "#007AFF"
                    />
                    {viewPerc ? <ViewPercentage percentage={PercSlope(highNum, lowNum, run)} /> : null}
                    
        </View>
    )
};

const ViewPercentage = (props) => {   
            return (
        <View>
            <Text>{props.percentage}</Text>
        </View>
    )
};

//const [highNum, setHighNum] = useState(0);
class Home extends Component {
    render() {      
        return (
            
                <View>
                    <NumInput  />
                </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
       
    },
    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    inputActive: {
        borderColor: "green"
    }
})