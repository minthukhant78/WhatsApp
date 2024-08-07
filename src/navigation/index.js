import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ChatScreen from '../screens/ChatScreens'
// import ChatsScreen from '../screens/ChatsScreens'
import MainTabNavigator from './MainTadNavigator';
import ContactsScreen from '../screens/ContactsScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle : { backgroundColor:'whitesmoke'}}} >
          <Stack.Screen name='Home' component={MainTabNavigator} options={{ headerShown :false}}/>
            <Stack.Screen name='Chat' component={ChatScreen}/>
            <Stack.Screen name='Contacts' component={ContactsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation