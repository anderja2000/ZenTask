import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FileContext from './FileContext';


export default function FilePicker({ acceptedTypes }) {

    const { setFileUri, setFileType } = useContext(FileContext);

    async function PickFile() {
        try {
            const result = await DocumentPicker.getDocumentAsync({ type: acceptedTypes });
            // console.log(result);
            let assets = result.assets;
            let uri;
            assets.forEach((item) => {
                // console.log(`name of file: ${item.mimeType}`);
                let name = item.name;
                let type = item.mimeType;
                uri = item.uri;
                if (acceptedTypes.startsWith('image/')) {
                    // console.log(`This be an image: ${name}`);
                    // console.log(`Image uri: ${uri}`);
                    setFileType(type);
                    setFileUri(uri); // Update fileUri in the context4
                    // console.log("this image file", type);
                } else if (acceptedTypes.startsWith('text/') || acceptedTypes === 'application/pdf' || acceptedTypes === 'application/msword' || acceptedTypes === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || acceptedTypes === "application/*") {
                    // console.log(`uri: ${uri} `); 
                    // console.log(`type: ${type} `); 
                    // console.log(`name: ${name} `); 
                    setFileUri(uri);
                    setFileType(type);
                    // console.log('this text file', type);
                    // navigation.navigate('HomeScreen', { acceptedTypes });
                }
            });

        } catch (err) {
            console.error('Error: ', err);
        }
    }

    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <TouchableOpacity onPress={PickFile}>
                    <Text style={styles.choose}>
                        Pick {acceptedTypes.startsWith('text/') || acceptedTypes == "application/*" ? 'Text' : (acceptedTypes === 'image/*' ? 'Image' : 'File')} File
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    choose: {
        textAlignVertical: 'center',
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: 'orange',
        color: 'black',
        width: '100%', // Set width to 100% to stretch across the page
        height: 75,
        fontSize: 20,
        padding: 10,
        borderColor: 'gold',
        borderWidth: 4,
    },
});
