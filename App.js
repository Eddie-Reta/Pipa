import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import Main from "./components/Main";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1, justifyContent:"center"}}>       
              <Main />
              <StatusBar style="auto" />
      </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
  </SafeAreaView> 
  );
}