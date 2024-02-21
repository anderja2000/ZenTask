import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FilePicker from "./FilePicker";
import FileContext from "./FileContext";
import { useNavigation } from "@react-navigation/native";
import Profile from "./Profile";
import ParseFile from "./ParseFile";
export default function HomeScreen({ route, navigation }) {
  const {acceptedTypes} = route.params || {}; 
  const [backgroundUri, setBackgroundUri] = useState(null);
  const { fileUri, fileType } = useContext(FileContext);
  useEffect(() => {
    // Update backgroundUri based on fileType or other conditions
    if (fileType && fileType.startsWith('image/')) {
      setBackgroundUri(fileUri);
    } else { 
      setBackgroundUri(null)
    }
    console.log('fileUri:', fileUri);
    console.log('fileType:', fileType);
    console.log('backgroundUri:', backgroundUri);
  }, [fileUri, fileType, backgroundUri]);


  const navigaton = useNavigation();
  function handlePengiClick() {
    // console.log("penguin btn clicked");
    navigation.navigate(Profile);
  }

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{ uri: backgroundUri }}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.penguinIconContainer} onPress={handlePengiClick}>
            <MaterialCommunityIcons
              style={styles.penguinIcon}
              name="penguin"
              size={50}
              color="black"
            />
          </TouchableOpacity>
          <Text style={styles.text}>Calendar implementation</Text>
        </View>
        <RenderActivies />
        <View style={styles.insertDoc}>
          <FilePicker acceptedTypes={acceptedTypes || "application/ *"} />
          {fileUri && acceptedTypes && acceptedTypes.startsWith('image/') && <ParseFile />}

        </View>
      </View>
    </ImageBackground>
  );
}



function Activity({ activityType }) {
  return (
    <View style={{
      flexDirection: "row",
      marginRight: 40,
    }}>
      <View style={{


        marginTop: 30, backgroundColor: "blue",
        opacity: 0.7,
        width: 300,
        borderRadius: 20,
        height: 300,
      }}>
        <TouchableOpacity style={{

          borderRadius: 20,
          padding: 10,
          justifyContent: 'center',

        }}>
          <Text style={{ color: 'white', fontSize: 16 }}>{activityType}</Text>
        </TouchableOpacity>
        <ParseFile />
      </View>



    </View>
  )
}

function RenderActivies() {
  let list = [
    "Activity 1",
    "Activity 2",
    "Activity 3",
    "Activity 4",
    "Activity 5",
  ];
  return (
    <View>
      <FlatList
        horizontal
        data={list}
        renderItem={({ item }) => (

          <Activity activityType={item} />
        )}
        keyExtractor={(item) => item}
        style={{ marginTop: 30, gap: 40 }}
      />
    </View>

  )
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    // alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginTop: 50,
    marginLeft: 30,
    color: "red",
    marginBottom: 20,
  },
  filePickers: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
  penguinIconContainer: {
    position: 'absolute',
    top: 20, // Adjust as needed
    right: 20, // Adjust as needed
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 50,
    borderColor: 'gold',
    borderWidth: 2,
  },
  penguinIcon: {},
  insertDoc: {
    marginTop: 30,
    alignItems: 'center'
  }
});
