import React, { Component, useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Switch, Keyboard } from "react-native";
import PercSlope from "./PercSlope";
import { ValidateInput } from "./InputValidation";

const NumInput = (props) => {
    const [highNum, setHighNum] = useState("");
    const [lowNum, setLowNum] = useState("");
    const [run, setRun] = useState("");
    const [activeInputColor, setInputColor] = useState({
        highNum: "black",
        lowNum: "black",
        run: "black"
    });
    const [activeInput, toggleInputState] =  useState(true);
    const [viewPerc, toggleState] = useState(false);
    const [prevNum, setPrevNum] = useState({
                                            highNum: 0,
                                            lowNum: 0,
                                            run: 0
    });
    const [percentage, setNewPerc] = useState(0);
    const toggleSwitch = () => toggleState(previousState => !previousState);
    const toggleInputColor = () => toggleInputState(previousState => !previousState);
    
    return (
            <View style={styles.container}>
                <Text>{(prevNum.highNum != 0) ? `High Number Entered ${prevNum.highNum}` : "High Number: "}</Text>
                        <TextInput
                            onChangeText={setHighNum}
                            value={highNum}
                            placeholder="ex. 10.5"
                            style={[styles.input,
                                
                                {borderColor: activeInputColor.highNum}]
                            }
                            keyboardType="decimal-pad"
                            onFocus={() => {
                                setInputColor({highNum: "#37FB1B"})
                            }}
                            onBlur={() => {
                                setInputColor({highNum: "black"})
                            }}
                            maxLength={10}
                            textAlign="center"
                        />
                        <Text>Low Number: {(prevNum.lowNum != 0) ? prevNum.lowNum : null}</Text>
                            <TextInput
                                onChangeText={setLowNum}
                                value={lowNum}
                                placeholder="ex. 8.5"
                                style={[styles.input,
                                
                                    {borderColor: activeInputColor.lowNum}]
                                }
                                keyboardType="decimal-pad"
                                onFocus={() => {
                                    setInputColor({lowNum: "#37FB1B"})
                                }}
                                onBlur={() => {
                                    setInputColor({lowNum: "black"})
                                }}
                                maxLength={10}
                                textAlign="center"
                            />
                        <Text>Distance in Feet: {(prevNum.run != 0) ? prevNum.run : null}</Text>
                            <TextInput
                                onChangeText={setRun}
                                value={run}
                                placeholder="Number of Feet"
                                style={[styles.input,
                                
                                    {borderColor: activeInputColor.run}]
                                }
                                keyboardType="decimal-pad"
                                onFocus={() => {
                                    setInputColor({run: "#37FB1B"})
                                }}
                                onBlur={() => {
                                    setInputColor({run: "black"})
                                }}
                                maxLength={10}
                                textAlign="center"
                            />
                        <Button 
                            title="Calculate"
                            onPress={() => {
                            //  if (calcPressed) {
                                    if(ValidateInput(highNum) && ValidateInput(lowNum) && ValidateInput(run)) {
                                        const slopePerc = PercSlope(highNum, lowNum, run);
                                        setNewPerc(slopePerc);
                                        setPrevNum({
                                            highNum:highNum,
                                            lowNum:lowNum,
                                            run:run
                                        });
                                        setHighNum("");
                                        setLowNum("");
                                        setRun("");
                                        toggleState(true);
                                        Keyboard.dismiss();
                                    }
                            }}
                            color = "#007AFF"
                        />
                        {viewPerc ? <ViewPercentage percentage={percentage} /> : null}
                        
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