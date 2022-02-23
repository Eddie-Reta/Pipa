import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import Main from "./components/Main";

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: "lightblue", flex: 1}}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1, backgroundColor: "red", justifyContent:"center"}}
        >       
          <Text>Hello</Text>
              <Main />
              <StatusBar style="auto" />
      </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
  </SafeAreaView> 
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e6e6e6',
//     justifyContent: "center",
//     alignItems: "center"
    
//   },
// });
