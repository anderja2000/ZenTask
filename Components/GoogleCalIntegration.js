import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { authorize } from "react-native-app-auth";
import axios from "axios";
import { GoogleCalConfig } from "../GoogleCalConfig";
import { Calendar } from "react-native-calendars";

// console.log(`TOKEN ${GoogleCalConfig.serviceConfiguration.tokenEndpoint}`);
export default function GoogleCalIntegration() {
    const [accessToken, setAccessToken] = useState(null);
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    async function login() {
        try {
            const authResult = await authorize(GoogleCalConfig);
    
            setAccessToken(authResult.accessToken);
            console.log("Auth result", authResult); 
        } catch (error) {
            setError("Error login in " + error.message);
        }

    }

    async function listEvents() {
        const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events';
        try {

            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                timeout: 3000,
            })
            setEvents(response.data.items);
        } catch (error) {
            setError("Error loggin in " + error.message);
        }
    }
    useEffect(() => {
        if (accessToken) {
            listEvents();
        }
    }, [accessToken]);

    return (
        <View>
            <Text>Google Calendar</Text>
            {accessToken ? (
                <View>
                    <TouchableOpacity  onPress={listEvents}>
                        <Text>List Events</Text>
                    </TouchableOpacity>
                    <Text>Events:</Text>
                    {events.map((event) => (
                        <Text key={event.id}>{event.summary}</Text>
                    ))}
                </View>
            ) : (
                <TouchableOpacity style= {styles.button} onPress={login}>
                    <Text style = {{
                        color: "white"  ,
                    }}>Login with Google!</Text>
                </TouchableOpacity>
            )}
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    button : {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 120,
        height: 50,
        borderRadius: 10, 
        backgroundColor: 'blue',
    }
});
