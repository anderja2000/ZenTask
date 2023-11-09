import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import { Agenda } from "react-native-calendars";

export default function ToDo() {
    const [selectedDate, setSelectedDate] = useState("2023-10-17");
    const items = {
        [selectedDate]: [
            { name: 'React Native' },
            { name: 'Data viz' },
            { name: 'Relax' }, 
            {name: 'Group cry'},
            
        ],
        // Add your other items for different dates here
    };

    const renderItem = (item, isFirst) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Agenda
                selected={selectedDate}
                items={items}
                renderItem={renderItem}
                // Set the initial month to the month containing the selected date
                current={selectedDate}
                onDayPress={(day) => {
                    // Update the selected date when a day is pressed
                    setSelectedDate(day.dateString);
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    itemText: {
        color: '#888',
        fontSize: 16,
    }
});
