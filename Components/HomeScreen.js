import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CLIENT_ID, API_KEY} from '@env';
import GoogleCalIntegration from "./GoogleCalIntegration";
// console.log("API key", API_KEY );
// console.log(CLIENT_ID);
import FilePicker from "./FilePicker";

export default function HomeScreen({ navigation }) {

  return (

    // <GoogleOAuthProvider clientId="427847702764-jua29phddbt73257kb42tc560mdgh7eu.apps.googleusercontent.com">

    <View style={{
      flex: 1,
      backgroundColor: "orange",
    }}>

      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >Calender implementation</Text>
      <FilePicker/> 




    </View>
    // </GoogleOAuthProvider>

  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   messageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10, // Add spacing between the TouchableOpacity and the message
//   },
// });