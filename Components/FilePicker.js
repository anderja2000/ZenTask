import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function IcsFilePicker() {
    const [icsData, setIcsData] = useState(null);

    async function PickIcsFile() {
        try {
            const result = await DocumentPicker.getDocumentAsync({ type: 'text/calendar' });

            if (result.type === 'success') {
                const { uri } = result;
                const response = await fetch(uri);
                const icsContent = await response.text();

                // Parse the ICS content using a library like ical.js or another suitable library
                // You can do the parsing and processing here

                setIcsData(icsContent);
            } else {
                console.log("user cancelled file")
            }
        } catch (err) {
            console.error("error: ", err);
        }
    }

    return (
        <View style={{
            gap: 20,
            flexDirection: 'column',
            justifyContent: "space-between",
            alignItems: 'center',
        }}>
            <Text>ICS File Picker</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Feather style={{
                    marginTop: 10,
                    marginRight:20,
                }} name="file-plus" size={75} color="black" />
                <TouchableOpacity onPress={PickIcsFile}>
                    <Text style={styles.choose}>
                        Pick ICS File
                    </Text>
                </TouchableOpacity>
                <MaterialCommunityIcons style={{
                    marginTop: 10,
                    marginLeft: 20, 
                }} name="penguin" size={75} color="blue" />
            </View>
            {icsData && <Text>ICS Content: {icsData}</Text>}
        </View>
        
        
    );
}


const styles = StyleSheet.create({
    choose: {
        textAlignVertical: 'center',
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: 'pink',
        color: 'black',
        width: 175,
        height: 75,
        fontSize: 20,
        padding: 10,
        borderColor: 'gold',
        borderWidth: 4,
    }
})

