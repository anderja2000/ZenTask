import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from './Components/HomeScreen';
import CalendarPage from './Components/CalendarPage';
import ToDo from './Components/ToDo';
import Profile from './Components/Profile';
import FileContext from './Components/FileContext';
import { useState } from 'react';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fileUri, setFileUri] = useState(null);
  const [fileType, setFileType] = useState(null); 
  return (
    <FileContext.Provider value={{ fileUri, setFileUri,fileType, setFileType }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </FileContext.Provider>
  );
}

function MainTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'red',
        labelStyle: {
          fontSize: 13,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Calender"
        component={CalendarPage}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Checklist"
        component={ToDo}
        options={{
          tabBarLabel: 'Agenda',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-check" size={26} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
