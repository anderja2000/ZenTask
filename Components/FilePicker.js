import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system'; // Import expo-file-system
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FileContext from './FileContext';


export default function FilePicker({ acceptedTypes }) {

    const { setFileUri, setFileType } = useContext(FileContext);

    async function PickFile() {
        try {
            const result = await DocumentPicker.getDocumentAsync({ type: acceptedTypes });
            let assets = result.assets;

            assets.forEach((item) => {
                let { name, mimeType, uri } = item;
                setFileType(mimeType);

                if (mimeType.startsWith('text/') || mimeType === 'application/pdf' || mimeType === 'application/msword' || mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || mimeType === "application/*") {
                    // If it's a text file, read its contents
                    FileSystem.readAsStringAsync(uri)
                        .then(fileContents => {
                            console.log(fileContents); // Do something with the contents, like parsing
                        })
                        .catch(error => {
                            console.error('Error reading file:', error);
                        });
                } else if (acceptedTypes.startsWith('image/') && mimeType.startsWith('image/')) {
                    // If it's an image file, set the URI and handle it separately
                    setFileUri(uri);
                    console.log('Image File:', uri);
                    // Additional logic for handling images can go here
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
                    Pick {acceptedTypes.startsWith('text/') ? 'Text' : (acceptedTypes.startsWith('image/') ? 'Image' : 'Text')} File
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}
// adding contetn 
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
