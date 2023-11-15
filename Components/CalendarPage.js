import { View, Text } from "react-native";  
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useState } from "react";

//  this is cited from https://www.npmjs.com/package/react-native-calendars 

// and adjusted  accordingly 
export default function CalendarPage({navigation}) { 
    const [selected, setSelected] = useState('');

    //   • Home Screen Customization: Users can personalize the app's home screen, adding and arranging widgets.
    // • Calendar Integration: Import and view assignments from .ics or Google Calendar.
    // • Study Session Planning: Generate basic study plans based on imported calendars.
    // • Task Management: Implement the task breakdown roulette for random task suggestions.
    // • Basic UI: Establish a clean and functional user interface for the home screen and the study session view.
    
      return (
    
        <Calendar 
          style = {{
            marginTop: 100,  
            borderWidth:2, 
            borderColor: "red", 
            
            backgroundColor: "#000000", 
            height: 500, 
          }}
    
          theme = {{
            calendarBackground: '#FEC7F8',
             
          }}
    
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
          }}
        />
      );
}