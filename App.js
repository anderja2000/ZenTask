import { StatusBar } from 'expo-status-bar';
import {CLIENT_ID, REDIRECT_URL, CALENDAR_AUTH,AUTH_ENDPOINT, TOKEN_ENDPOINT } from '@env'  
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleOAuthProvider } from '@react-oauth/google';
import HomeScreen from './Components/HomeScreen';
import CalendarPage from './Components/CalendarPage';
import ToDo from './Components/ToDo';
import { AppRegistry } from 'react-native';

const Tabs = createBottomTabNavigator();

console.log('clientId ', CLIENT_ID);
console.log('Token  ', TOKEN_ENDPOINT);

export default function App() {
  return (
   
      <SafeAreaView style={{
        flex: 1
      }}
        tabBarOptions={{
          activeTintColor: 'red',
          labelStyle: {
            fontSize: 13,
          },
        }}>
        <NavigationContainer
          initialRouteName="Home"
          activeColor="red"
        >
          <Tabs.Navigator initialRouteName='Home'>
            <Tabs.Screen name='Home' component={HomeScreen} options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="home" size={26} color={color} />
              ),
            }} />
            <Tabs.Screen name='Calender' component={CalendarPage} options={{
              tabBarLabel: "Calendar",
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="calendar" size={26} color={color} />
              ),
            }} />
            <Tabs.Screen name='Checklist' component={ToDo} options={{
              tabBarLabel: "Agenda",
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="calendar-check" size={26} color={color} />
              ),
            }} />
          </Tabs.Navigator>
        </NavigationContainer>
      </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
