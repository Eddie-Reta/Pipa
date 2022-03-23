import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Home";
import Algorithm from "./AlgorithmPage";

const Main = () => {
    const Stack = createNativeStackNavigator();
    return (
                
            <NavigationContainer>

                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="AlgorithmPage" component={Algorithm} />
                </Stack.Navigator>

            </NavigationContainer>
        
    )
};

export default Main;