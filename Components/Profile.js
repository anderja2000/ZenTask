import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import FilePicker from "./FilePicker";

import FileContext from "./FileContext";


export default function Profile({ navigation }) {
  const { fileUri } = useContext(FileContext);
  return (

    <ImageBackground
      style={{ flex: 1 }}
      source={{ uri: fileUri }}
      resizeMode="cover"
    >
      
      <FilePicker acceptedTypes="image/*" />
    </ImageBackground>

  )

}

const styles = StyleSheet.create({
  filePickers: {
    marginTop: 20,
    flexDirection: 'column',
  },
})